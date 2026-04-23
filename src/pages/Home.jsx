// src/pages/Home.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import { Box, Typography, Container, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Link, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeatureSection from '../components/home/FeatureSection';
import BusinessIcon from '@mui/icons-material/Business';
import HistoryIcon from '@mui/icons-material/History';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '../components/common/Button';

const Home = () => {
    const servicesList = [
        { text: "Pakume ka teenustöid ja teeme sinu palgist valmismaterjali!" },
        { text: "Ostame palke" },
        { text: "Materjali hööveldamine (ühelt või mitmelt küljelt)" },
        { text: "Pikkupidi järkamine täpsusmõõtu (sh 22mm ja 25mm paksused)" },
        { text: "Erinevate puiduliikide töötlemine (mänd, kuusk jne)" },
        { text: "Transporditeenus kokkuleppel" },
        { text: "Konsultatsioon materjali valikul" },
    ];

    const faqList = [
        { q: "Kui kiiresti ma materjali kätte saan?", a: "Laos oleva standardmaterjali saab üldjuhul kätte samal või järgmisel päeval. Eritellimuste puhul sõltub tarneaeg töö mahust ja keerukusest, täpsustame selle pakkumise tegemisel." },
        { q: "Millised on teie tarneajad?", a: "Märjamaa ja Raplamaa: 24 tundi\nTallinn ja lähiomavalitsused: 48 tundi\nMuud piirkonnad: 3-5 päeva kokkuleppel\nKiirem tarne võimalik olenevalt mahust." },
        { q: "Kas pakute ka transporti?", a: "Jah, pakume kokkuleppel transporditeenust Raplamaa piires ja vajadusel ka kaugemale. Transpordi hind sõltub kogusest ja sihtkohast." },
        { q: "Milliseid puiduliike te töötlete?", a: "Peamiselt töötleme kohalikke okaspuid nagu mänd ja kuusk, kuid vastavalt võimalustele ja kokkuleppele saame töödelda ka teisi liike." },
        { q: "Mis on minimaalne tellimuse kogus?", a: "Minimaalset tellimuse kogust ei ole. Väga väikeste koguste puhul võib rakenduda väiketellimuse tasu. Küsi julgelt hinnapakkumist!" },
        { q: "Kas materjal on kuiv?", a: "Pakume nii värskelt saetud kui ka õhukuiva materjali. Võta ühendust ja anname nõu, milline materjal teie projekti jaoks parim on." },
    ];

    return (
        <>
            <Helmet>
                {/* Standard SEO */}
                <title>Saematerjal Märjamaal & Kesk-Eestis | Terrassilauad, Voodrilauad | Simeli Saeveski</title>
                <meta name="description" content="Kohalik saeveski Märjamaal. Terrassilauad, voodrilauad, sauna lavalauad. Kiire teenindus ja paindlikud kogused." />
                <meta name="keywords" content="saematerjal, terrassilaud, voodrilaud, sauna lavalaud, Märjamaa, saeveski" />

                {/* Open Graph (Facebook, WhatsApp, iMessage, LinkedIn) */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://simelisaeveski.ee/" /> {/* Pane siia oma päris domeen! */}
                <meta property="og:title" content="Simeli Saeveski | Saematerjal Märjamaal" />
                <meta property="og:description" content="Kohalik saeveski Märjamaal. Terrassilauad, voodrilauad ja erimõõduline saematerjal. Kiire teenindus otse tootjalt!" />
                <meta property="og:image" content="https://simelisaeveski.ee/images/og-image.png" /> {/* MUST be an absolute URL */}

                {/* Twitter / X (Uses the same image but requires its own tags) */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://simelisaeveski.ee/" />
                <meta name="twitter:title" content="Simeli Saeveski | Saematerjal Märjamaal" />
                <meta name="twitter:description" content="Kohalik saeveski Märjamaal. Terrassilauad, voodrilauad ja erimõõduline saematerjal." />
                <meta name="twitter:image" content="https://simelisaeveski.ee/images/og-image.png" />
            </Helmet>

            <Hero />

            <Box id="meist" sx={{ py: 6, backgroundColor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center" gutterBottom>
                        Meist
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box
                                component="img"
                                src="/images/siim-profile.png"
                                alt="Siim Soosaar, Simeli Saeveski omanik"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    objectFit: 'cover',
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Paper elevation={0} sx={{ p: 3, backgroundColor: 'transparent' }}>
                                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Simeli Saeveski
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <BusinessIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                                    Simeli Saeveski OÜ on Märjamaal tegutsev puidutöötlemisettevõte ja saeveski.
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <HistoryIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                                    Meil on pikaajaline kogemus puiduvaldkonnas ja tagame asjatundliku teeninduse ning kvaliteetse materjali.
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <LocalShippingIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                                    Keskendume eelkõige väikeklientidele ja pakume paindlikke lahendusi ning konkurentsivõimelist hinda. Erinevalt suuretest saeveskidest, mis nõuavad suuri tellimusi, töötame ka väiksemate kogustega.
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
                        Suurtest kiirem!
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
                                    Laokaup kohale kuni 24 tunniga
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
                                    Kiire tarne – kohale 2 päeva jooksul
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
                                    Kokkuleppel – paneme tähtajad paika
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Typography variant="body1">
                            Kiirema tarneaja kohta küsi julgelt! <strong>Paljud tellimused võivad valmis saada veelgi kiiremini.</strong>
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
                                    {/* Uuendatud klikitav map funktsioon */}
                                    {servicesList.map((service, index) => {
                                        // Määrame dünaamilised propsid, kui tegu on lingiga
                                        const linkProps = service.link ? {
                                            component: RouterLink,
                                            to: service.link
                                        } : {};

                                        return (
                                            <ListItem
                                                key={index}
                                                disableGutters
                                                {...linkProps} // Lisab component ja to propsid, kui link eksisteerib
                                                sx={{
                                                    bgcolor: service.highlight ? '#fff4e5' : 'transparent',
                                                    border: service.highlight ? '1px solid' : 'none',
                                                    borderColor: service.highlight ? '#ffa726' : 'transparent',
                                                    borderRadius: 1,
                                                    px: service.highlight ? 2 : 0,
                                                    py: service.highlight ? 1 : 0.5,
                                                    mb: service.highlight ? 1.5 : 0,
                                                    textDecoration: 'none', // Eemaldab lingi allajoonimise
                                                    color: 'inherit',
                                                    transition: 'all 0.2s ease',
                                                    // Kui on highlight, näitame, et see on klikitav
                                                    cursor: service.highlight ? 'pointer' : 'default',
                                                    '&:hover': service.highlight ? {
                                                        bgcolor: '#ffe0b2', // Teeb hiirega peale minnes veidi tumedamaks
                                                        borderColor: '#fb8c00'
                                                    } : {}
                                                }}
                                            >
                                                <ListItemIcon sx={{ minWidth: 40, color: service.highlight ? '#e65100' : 'primary.main' }}>
                                                    <CheckCircleOutlineIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={service.text || service}
                                                    primaryTypographyProps={{
                                                        fontWeight: service.highlight ? 'bold' : 'normal',
                                                        color: service.highlight ? '#d84315' : 'text.primary'
                                                    }}
                                                />
                                            </ListItem>
                                        );
                                    })}
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
                        Küsi personaalset hinnapakkumist
                    </Button>
                </Container>
            </Box>
        </>
    );
};

export default Home;
