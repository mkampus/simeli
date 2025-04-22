import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider, CssBaseline, Box, CircularProgress } from "@mui/material";
import theme from "./theme";
import { LanguageProvider } from "./context/LanguageContext";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const LoadingFallback = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 128px)' }}>
        <CircularProgress />
    </Box>
);

function App() {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Router>
                        <Helmet>
                            <html lang="et" />
                            <meta charSet="utf-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <meta name="theme-color" content={theme.palette.primary.main} />
                            <title>Simeli Saeveski | Kvaliteetne Saematerjal ja Puiduteenused Märjamaal</title>
                            <meta name="description" content="Otsid kvaliteetset saematerjali Märjamaal? Simeli Saeveski pakub laias valikus ehituspuitu ja puidutöötlemise teenuseid. Ligi 30 aastat kogemust. Küsi pakkumist!" />
                            <meta name="keywords" content="saematerjal, puit, ehituspuit, saeveski, puidutöötlemine, hööveldamine, järkamine, Märjamaa, Raplamaa, Simeli Saeveski, Siim Soosaar, õhukuiv materjal" />
                            <link rel="canonical" href="https://www.simelisaeveski.ee/" />
                            <meta property="og:title" content="Simeli Saeveski | Kvaliteetne Saematerjal Märjamaal" />
                            <meta property="og:description" content="Kohalik saeveski Märjamaal pakub kvaliteetset puitu, saematerjali ja puidutöötlemise teenuseid. Ligi 30 aastat kogemust." />
                            <meta property="og:image" content="/images/simeli-saeveski-social.webp" />
                            <meta property="og:url" content="https://www.simelisaeveski.ee" />
                            <meta property="og:type" content="website" />
                            <script type="application/ld+json">
                                {`
                                {
                                    "@context": "https://schema.org",
                                    "@type": "LocalBusiness",
                                    "name": "Simeli Saeveski OÜ",
                                    "image": "/images/simeli-saeveski-logo.webp",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "Orgita tee 11",
                                        "addressLocality": "Orgita",
                                        "addressRegion": "Rapla maakond",
                                        "postalCode": "78313",
                                        "addressCountry": "EE"
                                    },
                                    "telephone": "+372 58243476",
                                    "email": "simelisaeveski@gmail.com",
                                    "founder": {
                                        "@type": "Person",
                                        "name": "Siim Soosaar"
                                    },
                                    "openingHoursSpecification": [
                                        {
                                          "@type": "OpeningHoursSpecification",
                                          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                          "opens": "08:00",
                                          "closes": "17:00"
                                        },
                                        {
                                          "@type": "OpeningHoursSpecification",
                                          "dayOfWeek": ["Saturday"],
                                          "opens": "09:00",
                                          "closes": "14:00"
                                        },
                                        {
                                          "@type": "OpeningHoursSpecification",
                                          "dayOfWeek": ["Sunday"],
                                          "opens": "00:00",
                                          "closes": "00:00"
                                        }
                                    ],
                                    "knowsAbout": ["Saematerjal", "Puidutöötlemine", "Ehituspuit", "Hööveldamine", "Järkamine"],
                                    "areaServed": {
                                        "@type": "AdministrativeArea",
                                        "name": "Raplamaa"
                                    },
                                    "url": "https://www.simelisaeveski.ee"
                                }
                                `}
                            </script>
                        </Helmet>

                        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                            <Header />
                            <Box component="main" sx={{ flexGrow: 1 }}>
                                <Suspense fallback={<LoadingFallback />}>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/kontakt" element={<Contact />} />
                                        <Route path="*" element={<NotFound />} />
                                    </Routes>
                                </Suspense>
                            </Box>
                            <Footer />
                        </Box>
                    </Router>
                </ThemeProvider>
            </LanguageProvider>
        </HelmetProvider>
    );
}

export default App;
