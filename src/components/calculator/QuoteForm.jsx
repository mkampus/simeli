import React, { useState, useContext } from 'react';
import {
    TextField, Button, Grid, Box, CircularProgress, Alert,
    Typography, Paper, Divider, List, ListItem, ListItemText
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { QuoteContext } from '../../context/QuoteContext';

const QuoteForm = () => {
    const { quoteItems, clearQuote, removeItem, calculateTotals } = useContext(QuoteContext);
    const { totalPrice } = calculateTotals();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'
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

        // Prepare payload
        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
            items: quoteItems.map(item => ({
                product: `${item.width}x${item.height}mm - ${item.lengthLabel}`,
                quantity: item.quantity,
                unitPrice: item.piecePrice,
                lineTotal: (item.piecePrice * item.quantity).toFixed(2)
            })),
            totalAmount: totalPrice.toFixed(2)
        };

        try {
            // TODO: Replace with your actual backend URL
            const response = await fetch('/api/quotes/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus('success');
                clearQuote();
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage('Saatmine ebaõnnestus. Palun proovige hiljem uuesti.');
            }
        } catch (err) {
            setStatus('error');
            setErrorMessage('Ühenduse viga. Palun proovige hiljem uuesti.');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            {/* QUOTE SUMMARY */}
            {quoteItems.length > 0 && (
                <>
                    <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                        Teie päringu kokkuvõte:
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: 'grey.50' }}>
                        <List disablePadding>
                            {quoteItems.map((item, idx) => (
                                <ListItem
                                    key={idx}
                                    disablePadding
                                    sx={{
                                        py: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ListItemText
                                        primary={`${item.width}x${item.height}mm (${item.lengthLabel})`}
                                        secondary={`${item.quantity}tk × ${item.piecePrice.toFixed(2)}€ = ${(item.piecePrice * item.quantity).toFixed(2)}€`}
                                    />
                                    <Button
                                        size="small"
                                        color="error"
                                        onClick={() => removeItem(item.width, item.height, item.length)}
                                        startIcon={<DeleteOutlineIcon />}
                                    >
                                        Eemalda
                                    </Button>
                                </ListItem>
                            ))}
                        </List>
                        <Divider sx={{ my: 1 }} />
                        <Typography variant="subtitle1" align="right" sx={{ fontWeight: 'bold' }}>
                            Kokku: {totalPrice.toFixed(2)}€
                        </Typography>
                    </Paper>
                </>
            )}

            {/* CONTACT FORM */}
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

                {/* STATUS MESSAGES */}
                <Grid item xs={12}>
                    {status === 'success' && (
                        <Alert severity="success">
                            ✓ Päring saadetud edukalt! Võtame teiega ühendust varsti.
                        </Alert>
                    )}
                    {status === 'error' && (
                        <Alert severity="error">
                            {errorMessage || 'Saatmine ebaõnnestus. Palun proovige hiljem uuesti.'}
                        </Alert>
                    )}
                </Grid>

                {/* SUBMIT BUTTON */}
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={status === 'submitting' || quoteItems.length === 0}
                        startIcon={status === 'submitting' ? <CircularProgress size={20} /> : <SendIcon />}
                    >
                        {status === 'submitting' ? 'Saadan...' : 'Saada pakkumise taotlus'}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default QuoteForm;