import React, { useContext } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ForestIcon from '@mui/icons-material/Forest';
import HandymanIcon from '@mui/icons-material/Handyman';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { LanguageContext } from '../../context/LanguageContext';

const FeatureSection = () => {
    const { translations } = useContext(LanguageContext);
    const t = translations.home || {
        featureSectionTitle: "Miks valida Simeli Saeveski?",
        feature1Title: "Kodumaine kvaliteet",
        feature1Desc: "Kasutame kohalikku toorainet ja tagame parima kvaliteedi.",
        feature2Title: "Paindlikud lahendused",
        feature2Desc: "Täidame eritellimusi vastavalt teie joonistele ja mõõtudele.",
        feature3Title: "Transport kokkuleppel",
        feature3Desc: "Toimetame materjalid mugavalt teie objektile.",
        feature4Title: "Ligi 30a Kogemust",
        feature4Desc: "Pikaajaline kogemus puidutöötlemises tagab asjatundliku nõu.",
        feature5Title: "Mugav Asukoht",
        feature5Desc: "Asub Märjamaal – säästa aega ja kütust võrreldes linnasõiduga.",
    };

    const features = [
        {
            icon: <HistoryEduIcon fontSize="large" color="primary" />,
            title: t.feature4Title,
            description: t.feature4Desc
        },
        {
            icon: <ForestIcon fontSize="large" color="primary" />,
            title: t.feature1Title,
            description: t.feature1Desc
        },
        {
            icon: <LocationOnIcon fontSize="large" color="primary" />,
            title: t.feature5Title,
            description: t.feature5Desc
        },
        {
            icon: <HandymanIcon fontSize="large" color="primary" />,
            title: t.feature2Title,
            description: t.feature2Desc
        },
        {
            icon: <LocalShippingIcon fontSize="large" color="primary" />,
            title: t.feature3Title,
            description: t.feature3Desc
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
                    {t.featureSectionTitle}
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
