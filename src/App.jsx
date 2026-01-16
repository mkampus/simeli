import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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
// REMOVED: const PriceCalculator = React.lazy(() => import("./pages/PriceCalculator"));

const LoadingFallback = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 128px)' }}>
        <CircularProgress />
    </Box>
);

// Wrapper component to access Router hooks (useNavigate) and Context
const GlobalQuoteUI = () => {
    const { isDrawerOpen, closeDrawer, openDrawer } = useContext(QuoteContext);
    const navigate = useNavigate();

    const handleQuoteSubmit = () => {
        closeDrawer();
        navigate('/kontakt');
        window.scrollTo(0, 0);
    };

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
                            <html lang="et" />
                            <title>Simeli Saeveski</title>
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