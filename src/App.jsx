import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider, CssBaseline, Box, CircularProgress } from "@mui/material";
import theme from "./theme";
import { QuoteProvider, QuoteContext } from "./context/QuoteContext";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import QuoteRequestDrawer from './components/quote/QuoteRequestDrawer';
import QuoteButton from './components/quote/QuoteButton';

const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const LoadingFallback = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 128px)' }}>
        <CircularProgress />
    </Box>
);

// Wrapper component to access Router hooks (useNavigate) and Context
const GlobalQuoteUI = () => {
    const { isDrawerOpen, closeDrawer, openDrawer } = useContext(QuoteContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Only show drawer/button if NOT on contact page
    const isContactPage = location.pathname === '/kontakt';

    const handleQuoteSubmit = () => {
        closeDrawer();
        navigate('/kontakt');
        window.scrollTo(0, 0);
    };

    // Hide drawer completely on contact page
    if (isContactPage) {
        return null;
    }

    return (
        <>
            <QuoteButton onClick={openDrawer} />
            <QuoteRequestDrawer
                open={isDrawerOpen}
                onClose={closeDrawer}
                onSubmit={handleQuoteSubmit}
            />
        </>
    );
};

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <QuoteProvider>
                    <Router>
                        <Helmet>
                            <script type="application/ld+json">
                                {JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "LocalBusiness",
                                    "@id": "https://simelisaeveski.ee",
                                    "name": "Simeli Saeveski OÜ",
                                    "description": "Kohalik saeveski Märjamaal. Terrassilauad, voodrilauad, sauna lavalauad. Kiire pakkumise tegemine ja paindlikud kogused.",
                                    "url": "https://simelisaeveski.ee",
                                    "telephone": "+37258243476",
                                    "email": "simelisaeveski@gmail.com",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "Uus tn 9",
                                        "addressLocality": "Märjamaa",
                                        "postalCode": "78304",
                                        "addressCountry": "EE"
                                    },
                                    "areaServed": [
                                        {
                                            "@type": "City",
                                            "name": "Märjamaa",
                                            "addressCountry": "EE"
                                        },
                                        {
                                            "@type": "City",
                                            "name": "Rapla",
                                            "addressCountry": "EE"
                                        },
                                        {
                                            "@type": "City",
                                            "name": "Tallinn",
                                            "addressCountry": "EE"
                                        },
                                        {
                                            "@type": "City",
                                            "name": "Tartu",
                                            "addressCountry": "EE"
                                        }
                                    ],
                                    "priceRange": "€€",
                                    "openingHoursSpecification": [
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                            "opens": "08:00",
                                            "closes": "17:00",
                                            "description": "E-R"
                                        },
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            "dayOfWeek": "Saturday",
                                            "opens": "09:00",
                                            "closes": "14:00",
                                            "description": "L"
                                        },
                                        {
                                            "@type": "OpeningHoursSpecification",
                                            "dayOfWeek": "Sunday",
                                            "closes": "00:00",
                                            "description": "P - suletud"
                                        }
                                    ]
                                })}
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
                            <GlobalQuoteUI />
                        </Box>
                    </Router>
                </QuoteProvider>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;