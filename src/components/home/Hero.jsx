// src/components/home/Hero.jsx
import React from 'react';
import Button from '../common/Button';
import { Container, Typography, Box } from '@mui/material';

const Hero = () => {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                textAlign: 'center',
                color: 'white',
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/saeveski-hero-bg.webp)',
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
                    Kvaliteetne saematerjal Märjamaal
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
                    Ligi 30 aastat kogemust. Kohalik tootja, kiire tarne, paindlikud lahendused.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                        to="/kontakt?calculator=open"
                        color="primary"
                        size="large"
                        variant="contained"
                    >
                        Hinnakalkulaator
                    </Button>
                    <Button to="/kontakt" color="secondary" variant="contained" size="large">
                        Küsi pakkumist
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;