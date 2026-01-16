// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Typography, Box, Grid, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalculateIcon from '@mui/icons-material/Calculate';
import ContactInfo from '../components/contact/ContactInfo';
import PriceCalculator from '../components/calculator/PriceCalculator';
import QuoteForm from '../components/calculator/QuoteForm';

const Contact = () => {
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [searchParams] = useSearchParams();

    React.useEffect(() => {
        if (searchParams.get('calculator') === 'open') {
            setCalculatorOpen(true);
        }
    }, [searchParams]);

    const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2121.5!2d24.428896!3d58.903918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed31a5a5a5a5a5%3A0x0!2sUus%20tn%209%2C%2078304%20M%C3%A4rjamaa!5e0!3m2!1sen!2see!4v1234567890";

    return (
        <>
            <Helmet>
                <title>Hinnapakkumise Taotlus | Simeli Saeveski | Kontakt & Kalkulaator</title>
                <meta name="description" content="Küsi hinnapakkumist saematerjalile. Kasutage meie hinnakalkulaatorit või täitke vormi otse. Kiire vastus Märjamaalt, Simeli saevekist." />
            </Helmet>

            <Box sx={{ py: 6, backgroundColor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h1" align="center" gutterBottom>
                        Võta meiega ühendust
                    </Typography>
                    <Typography variant="h5" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
                        Küsi hinnapakkumist otse või kasuta kalkulaatorit!
                    </Typography>

                    <Grid container spacing={4}>
                        {/* LEFT SIDE: Contact Info + Map */}
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
                                Kontaktandmed ja Asukoht
                            </Typography>
                            <ContactInfo />
                            <Typography variant="body1" sx={{ mt: 3, mb: 2 }}>
                                Asume Märjamaal, Raplamaal – ligipääs lihtne nii kohalikele klientidele kui kaugemalt tulejatele.
                            </Typography>
                            <Box sx={{ height: 300, width: '100%', borderRadius: 1, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
                                <iframe
                                    title="Simeli Saeveski asukoht"
                                    src={mapEmbedSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </Box>
                        </Grid>

                        {/* RIGHT SIDE: Calculator + Quote Form */}
                        <Grid item xs={12} md={7}>
                            {/* COLLAPSIBLE CALCULATOR */}
                            <Accordion
                                expanded={calculatorOpen}
                                onChange={() => setCalculatorOpen(!calculatorOpen)}
                                sx={{
                                    mb: 3,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    '&:before': { display: 'none' }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        bgcolor: calculatorOpen ? 'primary.light' : 'background.paper',
                                        color: calculatorOpen ? 'primary.contrastText' : 'text.primary',
                                        '&:hover': {
                                            bgcolor: 'primary.light',
                                            color: 'primary.contrastText',
                                            cursor: 'pointer'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <CalculateIcon sx={{ mr: 1 }} />
                                    <Typography variant="h6">Hinnakalkulaator</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ bgcolor: 'background.paper', p: 3 }}>
                                    <PriceCalculator />
                                </AccordionDetails>
                            </Accordion>

                            {/* QUOTE FORM - Always visible */}
                            <div id="quote-form-section">
                                <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
                                    Tee hinnapäring
                                </Typography>
                                <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
                                    <QuoteForm />
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Contact;