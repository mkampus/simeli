// src/components/contact/ContactForm.jsx
import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Box, CircularProgress, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { LanguageContext } from '../../context/LanguageContext';

const ContactForm = () => {
    const { translations } = useContext(LanguageContext);
    // Ajutised tõlked vormi jaoks
    const t = translations.contactForm || {
        nameLabel: "Teie nimi",
        nameRequired: "Nimi on kohustuslik",
        emailLabel: "E-posti aadress",
        emailRequired: "E-post on kohustuslik",
        emailInvalid: "Palun sisestage korrektne e-posti aadress",
        phoneLabel: "Telefoninumber (valikuline)",
        subjectLabel: "Teema (valikuline)",
        messageLabel: "Sõnum",
        messageRequired: "Sõnum on kohustuslik",
        messageMinLength: "Sõnum peab olema vähemalt 10 tähemärki pikk",
        sendButton: "Saada sõnum",
        sending: "Saadan...",
        successMessage: "Täname! Teie sõnum on saadetud.",
        errorMessage: "Vabandust, sõnumi saatmine ebaõnnestus. Palun proovige hiljem uuesti."
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const validateEmail = (email) => {
        // Lihtne e-posti valideerimine
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = t.nameRequired;
            isValid = false;
        }
        if (!formData.email.trim()) {
            tempErrors.email = t.emailRequired;
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            tempErrors.email = t.emailInvalid;
            isValid = false;
        }
        if (!formData.message.trim()) {
            tempErrors.message = t.messageRequired;
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            tempErrors.message = t.messageMinLength;
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Eemalda viga, kui kasutaja hakkab parandama
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
        // Tühista saatmise staatus, kui vormi muudetakse
        setSubmitStatus(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitStatus(null); // Tühista eelmine staatus

        if (!validateForm()) {
            return; // Ära saada, kui valideerimine ebaõnnestub
        }

        setIsSubmitting(true);

        // --- SIIN TOIMUB PÄRIS SAATMINE (AJUTINE SIMULATSIOON) ---
        console.log("Saadetavad andmed:", formData);
        // Simuleerime võrgupäringut
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Simuleerime juhuslikku õnnestumist/ebaõnnestumist
        const success = Math.random() > 0.2; // 80% õnnestumise tõenäosus
        // --- SAATMISE SIMULATSIOONI LÕPP ---

        setIsSubmitting(false);

        if (success) {
            setSubmitStatus('success');
            // Tühjenda vorm pärast õnnestunud saatmist
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setErrors({});
        } else {
            setSubmitStatus('error');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="name"
                        name="name"
                        label={t.nameLabel}
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        disabled={isSubmitting}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        type="email"
                        label={t.emailLabel}
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        disabled={isSubmitting}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label={t.phoneLabel}
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        // Võid lisada telefoni valideerimise, kui vaja
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="subject"
                        name="subject"
                        label={t.subjectLabel}
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="message"
                        name="message"
                        label={t.messageLabel}
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        disabled={isSubmitting}
                    />
                </Grid>
                <Grid item xs={12}>
                    {/* Kuva teade pärast saatmist */}
                    {submitStatus === 'success' && (
                        <Alert severity="success" sx={{ mb: 2 }}>{t.successMessage}</Alert>
                    )}
                    {submitStatus === 'error' && (
                        <Alert severity="error" sx={{ mb: 2 }}>{t.errorMessage}</Alert>
                    )}
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'right' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                    >
                        {isSubmitting ? t.sending : t.sendButton}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;
