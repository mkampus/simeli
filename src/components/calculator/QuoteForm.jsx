// src/components/calculator/QuoteForm.jsx
import React, { useState, useContext } from 'react';
import {
    TextField, Button, Grid, Box, CircularProgress, Alert,
    Typography, Paper, Divider, List, ListItem
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { QuoteContext } from '../../context/QuoteContext';

const validatePhoneNumber = (phone) => {
    if (!phone) return true;

    const cleaned = phone.replace(/[\s\-().+]/g, '');
    const phoneRegex = /^(\+\d{1,3})?\d{7,15}$/;

    return phoneRegex.test(cleaned);
};

const QuoteForm = () => {
    const { quoteItems, clearQuote, removeItem, calculateTotals } = useContext(QuoteContext);
    const { totalNetPrice, totalGrossPrice, totalVatAmount } = calculateTotals();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) {
            setErrorMessage('Nimi on kohustuslik');
            return false;
        }
        if (!formData.email.trim()) {
            setErrorMessage('E-post on kohustuslik');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Palun sisestage korrektne e-posti aadress');
            return false;
        }
        if (formData.phone && !validatePhoneNumber(formData.phone)) {
            setErrorMessage('Palun sisestage korrektne telefoninumber (nt +372 58243476)');
            return false;
        }
        if (quoteItems.length === 0) {
            setErrorMessage('Palun lisage kalkulaatoriga vähemalt üks toode');
            return false;
        }
        setErrorMessage('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setStatus('error');
            return;
        }

        setStatus('submitting');

        const itemsList = quoteItems
            .map(item => {
                const net = (item.priceWithoutVat * item.quantity).toFixed(2);
                const gross = (item.priceWithVat * item.quantity).toFixed(2);
                return `${item.width}×${item.height}mm (${item.lengthLabel}): ${item.quantity}tk\n  Ilma KM-ta: €${net}\n  Koos KM-ga: €${gross}`;
            })
            .join('\n\n');

        const emailBody = `
HINNAPÄRING

👤 Klient: ${formData.name}
📧 E-post: ${formData.email}
📞 Telefon: ${formData.phone || '-'}
🏢 Ettevõte: ${formData.company || '-'}

📝 Lisainfo:
${formData.message}

📦 NÕUTUD MATERJALID:
${itemsList}

💰 LÕPPHIND:
Ilma KM-ta:  €${totalNetPrice.toFixed(2)}
Koos KM-ga:  €${totalGrossPrice.toFixed(2)}
        `;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'ff9d9431-7a39-4265-9d1d-9b07bf7877ec',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    message: emailBody,
                    redirect: false
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                clearQuote();
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Saatmine ebaõnnestus');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage('Ühenduse viga');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            {quoteItems.length > 0 && (
                <>
                    <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                        Teie hinnapäring:
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: 'grey.50' }}>
                        <List disablePadding>
                            {quoteItems.map((item, idx) => {
                                const itemTotalNet = item.priceWithoutVat * item.quantity;
                                const itemTotalGross = item.priceWithVat * item.quantity;

                                return (
                                    <ListItem
                                        key={idx}
                                        disablePadding
                                        sx={{
                                            py: 2,
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            borderBottom: '1px solid #eee'
                                        }}
                                    >
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                                {item.width}×{item.height}mm ({item.lengthLabel})
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {item.quantity}tk
                                            </Typography>
                                            {/* ILMA KM-TA BOLDIS JA ESILE TOODUD */}
                                            <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 'bold', color: '#333', fontSize: '1.05rem' }}>
                                                Ilma KM-ta: €{itemTotalNet.toFixed(2)}
                                            </Typography>
                                            {/* KM-GA NORMAAL */}
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                Koos KM-ga: €{itemTotalGross.toFixed(2)}
                                            </Typography>
                                        </Box>
                                        <Button
                                            size="small"
                                            color="error"
                                            onClick={() => removeItem(item.width, item.height, item.lengthMm)}
                                            startIcon={<DeleteOutlineIcon />}
                                        >
                                            Eemalda
                                        </Button>
                                    </ListItem>
                                );
                            })}
                        </List>

                        <Divider sx={{ my: 2 }} />

                        {/* Totals Summary */}
                        <Box sx={{ bgcolor: '#f5f5f5', p: 1.5, borderRadius: 1 }}>
                            {/* ILMA KM-TA BOLDIS JA ESILE TOODUD */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#333' }}>
                                    Kokku (ilma KM-ta):
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.05rem', color: '#333' }}>
                                    €{totalNetPrice.toFixed(2)}
                                </Typography>
                            </Box>
                            {/* KM RIDA NORMAAL */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body2" color="text.secondary">
                                    KM (24%):
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    +€{totalVatAmount.toFixed(2)}
                                </Typography>
                            </Box>
                            <Divider sx={{ my: 1 }} />
                            {/* KM-GA TOTAL */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                                    KOKKU (koos KM-ga):
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: '600', color: 'primary.main' }}>
                                    €{totalGrossPrice.toFixed(2)}
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </>
            )}

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nimi"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="E-posti aadress"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Telefoninumber"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Ettevõte (valikuline)"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Sõnum / Lisainfo"
                        name="message"
                        multiline
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                    />
                </Grid>

                <Grid item xs={12}>
                    {status === 'success' && (
                        <Alert severity="success">
                            ✓ Hinnapäring saadetud! Vastame varsti.
                        </Alert>
                    )}
                    {status === 'error' && (
                        <Alert severity="error">
                            {errorMessage || 'Saatmine ebaõnnestus. Palun proovige hiljem uuesti.'}
                        </Alert>
                    )}
                </Grid>

                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={status === 'submitting' || quoteItems.length === 0}
                        startIcon={status === 'submitting' ? <CircularProgress size={20} /> : <SendIcon />}
                    >
                        {status === 'submitting' ? 'Saadan...' : 'Saada hinnapäring'}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default QuoteForm;