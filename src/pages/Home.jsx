// src/pages/Home.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '../components/home/Hero';
import { Box, Typography, Container, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Link, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FeatureSection from '../components/home/FeatureSection';
import BusinessIcon from '@mui/icons-material/Business';
import HistoryIcon from '@mui/icons-material/History';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '../components/common/Button';

const Home = () => {
    const servicesList = [
        "Saematerjali lõikus (palgist lauani)",
        "Materjali hööveldamine (ühelt või mitmelt küljelt)",
        "Pikkupidi järkamine täpsusmõõtu (sh 22mm ja 25mm paksused)",
        "Erinevate puiduliikide töötlemine (mänd, kuusk jne)",
        "Transporditeenus kokkuleppel",
        "Konsultatsioon materjali valikul",
    ];

    const testimonialsList = [
        {
            quote: "Tellisin Simeli Saeveskilt materjali korterirenoveerimiseks. Hinnad olid selged, tarne kiire ja kvaliteet hea.",
            author: "OÜ Ehitus, Rapla",
            company: true
        },
        {
            quote: "Paindlik teenus ja personaalne lähenemisviis. Saim käitumine on kiire ja asjatundlik.",
            author: "OÜ Kodutööd, Märjamaa",
            company: true
        },
        {
            quote: "Kasutasime Simeli materjali taiga ehitamiseks. Täpne mõõdistamine ja suurepärane tulemus.",
            author: "OÜ Puukodu, Tallinn",
            company: true
        },
    ];

    const faqList = [
        { q: "Kui kiiresti ma materjali kätte saan?", a: "Laos oleva standardmaterjali saab üldjuhul kätte samal või järgmisel päeval. Eritellimuste puhul sõltub tarneaeg töö mahust ja keerukusest, täpsustame selle pakkumise tegemisel." },
        { q: "Millised on teie tarneajad?", a: "Märjamaa ja Raplamaa: 24 tundi\nTallinn ja lähiomavalitsused: 48 tundi\nMuud piirkonnad: 3-5 päeva kokkuleppel\nKiirem tarne võimalik olenevalt mahust." },
        { q: "Kas pakute ka transporti?", a: "Jah, pakume kokkuleppel transporditeenust Raplamaa piires ja vajadusel ka kaugemale. Transpordi hind sõltub kogusest ja sihtkohast." },
        { q: "Milliseid puiduliike te töötlete?", a: "Peamiselt töötleme kohalikke okaspuid nagu mänd ja kuusk, kuid vastavalt võimalustele ja kokkuleppele saame töödelda ka teisi liike." },
        { q: "Mis on minimaalne tellimuse kogus?", a: "Oleme paindlikud ja teenindame ka väikekliente. Minimaalset kogust kui sellist ei ole, kuid väga väikeste koguste puhul võib rakenduda väiketellimuse tasu. Küsi julgelt pakkumist!" },
        { q: "Kas materjal on kuiv?", a: "Pakume nii värskelt saetud kui ka õhukuiva materjali. Õhukuiv materjal on soodsam, kuid selle niiskusprotsent on kõrgem kui kuivatis kuivatatul. Anname nõu, milline materjal teie projekti jaoks parim on." },
    ];

    return (
        <>
            <Hero />

            <Box id="meist" sx={{ py: 6, backgroundColor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center" gutterBottom>
                        Meist
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Paper elevation={0} sx={{ p: 3, backgroundColor: 'transparent', textAlign: 'center' }}>
                                <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 2 }}>
                                    <BusinessIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                                    Simeli Saeveski OÜ on Märjamaal tegutsev puidutöötlemisettevõte.
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <HistoryIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                                    Ettevõtte omanik Siim Soosaar omab pikaajalist kogemust puiduvaldkonnas, tagades asjatundliku teeninduse ja kvaliteetse materjali.
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    Keskendume eelkõige kohalikele väikeklientidele, pakkudes paindlikke lahendusi ja konkurentsivõimelist hinda. Erinevalt suuretest saeveskidest, mis nõuavad minimaalseid tellimusi, saame töötada ka väiksemate kogustega.
                                </Typography>
                                <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 3 }}>
                                    Registrikood: <strong>16857352</strong> | KM-kood: <strong>EE102676633</strong>
                                </Typography>
                                <Button to="/kontakt" variant="outlined" color="primary">
                                    Võta meiega ühendust
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box id="tarne" sx={{ py: 6, backgroundColor: 'primary.light', color: 'primary.contrastText' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center" gutterBottom>
                        ⚡ Kiired Tarneajad
                    </Typography>
                    <Typography variant="h5" component="p" align="center" color="inherit" sx={{ mb: 4, opacity: 0.95 }}>
                        Kiirem teenus kui suurte saeveskide puhul
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'inherit' }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    📍 Märjamaa & Raplamaa
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'success.light' }}>
                                    24 tundi
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Kohalik teenindus - sama päeva tellimus kätte järgmisel päeval
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Paper sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'inherit' }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    🚚 Tallinn & Haapsalu
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'success.light' }}>
                                    48 tundi
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Kiire transport - päris-aegne teenindus
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Paper sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'inherit' }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    🌍 Muud piirkonnad
                                </Typography>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'success.light' }}>
                                    3-5 päeva
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Kokkuleppel - lepime tähtajad paika individuaalselt
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Typography variant="body1">
                            Kiirema tarneaja kohta küsi julgelt! <strong>Paljud tellimused käivad välja veelgi kiiremini.</strong>
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box id="teenused" sx={{ py: 6, backgroundColor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center" gutterBottom>
                        Meie Teenused
                    </Typography>
                    <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
                        Pakume laia valikut puidutöötlemise teenuseid vastavalt teie vajadustele, sealhulgas kvaliteetset õhukuiva materjali:
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={8}>
                            <Paper elevation={2} sx={{ p: 3 }}>
                                <List>
                                    {servicesList.map((service, index) => (
                                        <ListItem key={index} disableGutters>
                                            <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                                                <CheckCircleOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={service} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                                    Ei leidnud sobivat teenust? <Link component={RouterLink} to="/kontakt">Võta meiega ühendust</Link> ja leiame lahenduse!
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <FeatureSection />

            <Box id="tagasiside" sx={{ py: 6, backgroundColor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
                        Klientide Tagasiside
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {testimonialsList.map((testimonial, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper elevation={1} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                                        <FormatQuoteIcon sx={{ color: 'primary.main', mr: 1, transform: 'scaleX(-1)' }} />
                                        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>{testimonial.quote}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                                            — <strong>{testimonial.author}</strong>
                                        </Typography>
                                        {testimonial.company && (
                                            <Typography variant="caption" color="primary" sx={{ display: 'block', mt: 0.5 }}>
                                                ✓ Kontrollitud klient
                                            </Typography>
                                        )}
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box id="kkk" sx={{ py: 6, backgroundColor: 'background.default' }}>
                <Container maxWidth="md">
                    <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
                        Korduma Kippuvad Küsimused
                    </Typography>
                    {faqList.map((faq, index) => (
                        <Accordion key={index} elevation={1} sx={{ '&:before': { display: 'none' }, mb: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}a-content`}
                                id={`panel${index}a-header`}
                            >
                                <Typography sx={{ fontWeight: 'medium' }}>{faq.q}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                                    {faq.a}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Box>

            <Box sx={{ py: 6, backgroundColor: 'primary.main', color: 'primary.contrastText', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" component="p" gutterBottom>
                        Valmis oma projekti alustama?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Võta meiega ühendust ja leiame parima lahenduse sinu puiduvajadustele!
                    </Typography>
                    <Button to="/kontakt" variant="contained" color="secondary" size="large">
                        Küsi personaalset pakkumist
                    </Button>
                </Container>
            </Box>

            <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center" gutterBottom>
                        Tehtud Tööde Näited
                    </Typography>
                    <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
                        Oleme aidanud paljusid kliente nende ehitus- ja renoveerimisprojektides.
                    </Typography>
                    <Box sx={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed grey', mt: 4, borderRadius: 1 }}>
                        <Typography color="textSecondary">(Pildigalerii tehtud töödest - nt. terrassilauad, voodrilauad, ehituskonstruktsioonid)</Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Home;