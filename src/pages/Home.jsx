import React, { useContext } from 'react';
import Hero from '../components/home/Hero';
import { Box, Typography, Container, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Link, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FeatureSection from '../components/home/FeatureSection';
import { LanguageContext } from '../context/LanguageContext';
import BusinessIcon from '@mui/icons-material/Business';
import HistoryIcon from '@mui/icons-material/History';
import Button from '../components/common/Button';

const Home = () => {
    const { translations } = useContext(LanguageContext);
    const t = translations.home || {
        servicesTitle: "Meie Teenused",
        servicesDescription: "Pakume laia valikut puidutöötlemise teenuseid vastavalt teie vajadustele, sealhulgas kvaliteetset õhukuiva materjali:",
        examplesTitle: "Tehtud Tööde Näited",
        examplesDescription: "Oleme aidanud paljusid kliente nende ehitus- ja renoveerimisprojektides.",
        aboutTitle: "Meist",
        aboutIntro: "Simeli Saeveski OÜ on Märjamaal tegutsev puidutöötlemisettevõte, mille juured ulatuvad ligi kolme aastakümne taha.",
        aboutOwner: "Ettevõtte omanik Siim Soosaar omab pikaajalist kogemust puiduvaldkonnas, tagades asjatundliku teeninduse ja kvaliteetse materjali.",
        aboutFocus: "Keskendume eelkõige kohalikele väikeklientidele, pakkudes paindlikke lahendusi ja konkurentsivõimelist hinda.",
        aboutArticleMention: "Nagu mainitud ka Maa Elu artiklis (12.09.2024), on meie eesmärk pakkuda stabiilset kvaliteeti ja usaldusväärset partnerlust.",
        contactLinkText: "Võta meiega ühendust",
        testimonialsTitle: "Klientide Tagasiside",
        faqTitle: "Korduma Kippuvad Küsimused",
        ctaButton: "Küsi personaalset pakkumist"
    };

    const servicesList = [
        "Saematerjali lõikus (palgist lauani)",
        "Materjali hööveldamine (ühelt või mitmelt küljelt)",
        "Pikkupidi järkamine täpsusmõõtu (sh 22mm ja 25mm paksused)",
        "Erinevate puiduliikide töötlemine (mänd, kuusk jne)",
        "Transporditeenus kokkuleppel",
        "Konsultatsioon materjali valikul",
    ];

    const testimonialsList = [
        { quote: "Väga kiire ja korralik teenindus! Sain täpselt sellise materjali nagu vaja oli.", author: "Mati K., Märjamaa vald" },
        { quote: "Hind oli konkurentsivõimeline ja materjali kvaliteet hea. Tulen kindlasti tagasi!", author: "Liina P., Rapla" },
        { quote: "Asjatundlik nõu ja abivalmis suhtumine. Soovitan soojalt!", author: "Andres T., Kohila" },
    ];

    const faqList = [
        { q: "Kui kiiresti ma materjali kätte saan?", a: "Laos oleva standardmaterjali saab üldjuhul kätte samal või järgmisel päeval. Eritellimuste puhul sõltub tarneaeg töö mahust ja keerukusest, täpsustame selle pakkumise tegemisel." },
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
                        {t.aboutTitle}
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={8}>
                            <Paper elevation={0} sx={{ p: 3, backgroundColor: 'transparent', textAlign: 'center' }}>
                                <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 2 }}>
                                    <BusinessIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                                    {t.aboutIntro}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    <HistoryIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                                    {t.aboutOwner}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    {t.aboutFocus}
                                </Typography>
                                <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 3 }}>
                                    {t.aboutArticleMention}
                                </Typography>
                                <Button to="/kontakt" variant="outlined" color="primary">
                                    {t.contactLinkText}
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box id="teenused" sx={{ py: 6, backgroundColor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center" gutterBottom>
                        {t.servicesTitle}
                    </Typography>
                    <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
                        {t.servicesDescription}
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
                                    Ei leidnud sobivat teenust? <Link component={RouterLink} to="/kontakt">{t.contactLinkText}</Link> ja leiame lahenduse!
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
                        {t.testimonialsTitle}
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {testimonialsList.map((testimonial, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper elevation={1} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                                        <FormatQuoteIcon sx={{ color: 'primary.main', mr: 1, transform: 'scaleX(-1)' }} />
                                        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>{testimonial.quote}</Typography>
                                    </Box>
                                    <Typography variant="caption" color="text.secondary" align="right" sx={{ mt: 2 }}>- {testimonial.author}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box id="kkk" sx={{ py: 6, backgroundColor: 'background.default' }}>
                <Container maxWidth="md">
                    <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
                        {t.faqTitle}
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
                                <Typography color="text.secondary">
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
                        {t.ctaButton}
                    </Button>
                </Container>
            </Box>

            <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h2" align="center" gutterBottom>
                        {t.examplesTitle}
                    </Typography>
                    <Typography variant="h6" component="p" align="center" color="text.secondary" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
                        {t.examplesDescription}
                    </Typography>
                    <Box sx={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed grey', mt: 4, borderRadius: 1 }}>
                        <Typography color="textSecondary">(Pildigalerii tehtud töödest - nt. terrassilauad, voodrilauad, ehituskonstruktsioonid)</Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

// Need importid on vajalikud, kui kasutad Linki Accordioni sees või mujal
import { Link as RouterLink } from 'react-router-dom';

export default Home;
