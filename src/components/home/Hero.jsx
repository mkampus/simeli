// src/components/home/Hero.jsx
import React from 'react';
import Button from '../common/Button';
import { Container, Typography, Box, Chip } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link as RouterLink } from 'react-router-dom';

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

                {/* ERIPAKKUMISE MÄRGIS */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <Chip
                        icon={<LocalOfferIcon style={{ color: '#fff' }} fontSize="small" />}
                        label="Eripakkumine: 6,5 m palgid erimõõdus saematerjaliks!"
                        component={RouterLink}
                        to="/kontakt?subject=erimoot#quote-form-section"
                        clickable
                        sx={{
                            backgroundColor: 'warning.main',
                            color: 'warning.contrastText',
                            fontWeight: 'bold',
                            fontSize: { xs: '0.85rem', sm: '1rem' },
                            py: 2.5,
                            px: 1,
                            boxShadow: '0 4px 14px 0 rgba(237, 108, 2, 0.39)',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                backgroundColor: 'warning.dark',
                                transform: 'translateY(-2px)'
                            }
                        }}
                    />
                </Box>

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
                    Saematerjal Märjamaal ja Kesk-Eestis
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
                    Kiire hinnapakkumine, paindlikud kogused.
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
                        Küsi hinnapakkumist
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;