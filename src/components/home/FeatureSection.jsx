// src/components/home/FeatureSection.jsx
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ForestIcon from '@mui/icons-material/Forest';
import HandymanIcon from '@mui/icons-material/Handyman';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const FeatureSection = () => {
    const features = [
        {
            icon: <HistoryEduIcon fontSize="large" color="primary" />,
            title: "Ligi 30a Kogemust",
            description: "Pikaajaline kogemus puidutöötlemises tagab asjatundliku nõu."
        },
        {
            icon: <ForestIcon fontSize="large" color="primary" />,
            title: "Kodumaine kvaliteet",
            description: "Kasutame kohalikku toorainet ja tagame parima kvaliteedi."
        },
        {
            icon: <LocationOnIcon fontSize="large" color="primary" />,
            title: "Mugav Asukoht",
            description: "Asub Märjamaal – säästa aega ja kütust võrreldes linnasõiduga."
        },
        {
            icon: <HandymanIcon fontSize="large" color="primary" />,
            title: "Paindlikud lahendused",
            description: "Täidame eritellimusi vastavalt teie joonistele ja mõõtudele."
        },
        {
            icon: <LocalShippingIcon fontSize="large" color="primary" />,
            title: "Transport kokkuleppel",
            description: "Toimetame materjalid mugavalt teie objektile."
        }
    ];

    return (
        <Box sx={{ py: 8, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    align="center"
                    gutterBottom
                    sx={{ mb: 6 }}
                >
                    Miks valida Simeli Saeveski?
                </Typography>

                <Grid container spacing={5} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Box sx={{ mb: 2, color: 'primary.main' }}>
                                    {feature.icon}
                                </Box>
                                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {feature.title}
                                </Typography>
                                <Typography color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default FeatureSection;