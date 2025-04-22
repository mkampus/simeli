// src/components/home/Hero.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Button from '../common/Button'; // Our custom button
import { Container, Typography, Box } from '@mui/material';

const Hero = () => {
    const { translations } = useContext(LanguageContext);
    // Veendu, et t.browseServices või sarnane tõlge on olemas LanguageContextis
    const t = translations.home.hero || {
        title: "Kvaliteetne saematerjal igaks projektiks",
        subtitle: "Kohalik tootja teie ehitusvajadusteks.",
        // browseProducts: "Vaata tooteid", // Vana
        browseServices: "Tutvu teenustega", // Uus variant
        requestQuote: "Küsi pakkumist",
    };

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                textAlign: 'center',
                color: 'white',
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero-lumber.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h1"
                    component="h1"
                    gutterBottom
                    sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
                    }}
                >
                    {t.title}
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    gutterBottom
                    sx={{
                        mb: 4,
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                    }}
                >
                    {t.subtitle}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                    {/* MUUDETUD NUPP: Viitab nüüd kontaktile või teenuste sektsioonile/lehele */}
                    <Button
                        // href="/#teenused" // Variant 1: Link lehe sisesele sektsioonile
                        // to="/teenused" // Variant 2: Link eraldi teenuste lehele
                        to="/kontakt" // Variant 3: Lihtsalt teine nupp kontaktile
                        color="primary"
                        size="large"
                        variant="contained"
                    >
                        {/* {t.browseServices} */}
                        Meie võimalused {/* Variant 3 tekst */}
                    </Button>
                    <Button to="/kontakt" color="secondary" variant="contained" size="large">
                        {t.requestQuote}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
