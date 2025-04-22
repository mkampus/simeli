import React, { useContext } from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { LanguageContext } from '../context/LanguageContext';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
    const { translations } = useContext(LanguageContext);
    const t = translations.contact || {
        metaTitle: "Kontakt | Simeli Saeveski | Saematerjal Märjamaal",
        metaDescription: "Võtke ühendust Simeli Saeveskiga Märjamaal päringute, tellimuste või konsultatsiooni saamiseks. Asume Orgita tee 11.",
        title: "Võta meiega ühendust",
        subtitle: "Ootame teie küsimusi ja päringuid!",
        formTitle: "Saada meile sõnum",
        infoTitle: "Kontaktandmed ja Asukoht",
        locationInfo: "Asume mugavalt Märjamaal, Raplamaal – lihtne ligipääs nii kohalikele kui kaugemalt tulijatele."
    };

    // REPLACE WITH YOUR ACTUAL GOOGLE MAPS EMBED SRC
    const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.3040525012443!2d24.41874504089357!3d58.89278961828076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed314b6a054aed%3A0x4fd6514987c186bc!2sParking%20lot%2C%20Rapla%20maakond!5e0!3m2!1sen!2see!4v1745334345379!5m2!1sen!2see"; // EXAMPLE - REPLACE THIS

    return (
        <>
            <Helmet>
                <title>{t.metaTitle}</title>
                <meta name="description" content={t.metaDescription} />
            </Helmet>

            <Box sx={{ py: 6, backgroundColor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h1" align="center" gutterBottom>
                        {t.title}
                    </Typography>
                    <Typography variant="h5" component="p" align="center" color="text.secondary" sx={{ mb: 6 }}>
                        {t.subtitle}
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
                                {t.infoTitle}
                            </Typography>
                            <ContactInfo />
                            <Typography variant="body1" sx={{ mt: 3, mb: 2 }}>
                                {t.locationInfo}
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

                        <Grid item xs={12} md={7}>
                            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
                                {t.formTitle}
                            </Typography>
                            <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
                                <ContactForm />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Contact;
