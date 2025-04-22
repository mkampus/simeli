import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Button from '../common/Button';
import { Container, Typography, Box } from '@mui/material';

const Hero = () => {
    const { translations } = useContext(LanguageContext);
    const t = translations.home.hero || {
        title: "Kvaliteetne saematerjal Märjamaal",
        subtitle: "Ligi 30 aastat kogemust. Kohalik tootja, kiire tarne, paindlikud lahendused.",
        requestQuote: "Küsi pakkumist",
        callNow: "Helista kohe"
    };

    return (
        <Box
            sx={{
                py: { xs: 10, md: 14 },
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/images/saeveski-hero-bg.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.55)',
                    zIndex: 2,
                },
            }}
        >
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 3 }}>
                <Typography
                    variant="h1"
                    component="h1"
                    gutterBottom
                    sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4rem' },
                        textShadow: '1px 1px 3px rgba(0,0,0,0.4)'
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
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}
                >
                    {t.subtitle}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Button to="/kontakt" color="primary" size="large" variant="contained">
                        {t.requestQuote}
                    </Button>
                    <Button href="tel:+37258243476" color="secondary" size="large" variant="contained">
                        {t.callNow}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
