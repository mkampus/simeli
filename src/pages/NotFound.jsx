import React, { useContext } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const NotFound = () => {
    const { translations } = useContext(LanguageContext);
    const t = translations.notFound || {
        title: "404 - Lehte ei leitud",
        message: "Vabandust, otsitud lehte ei eksisteeri või see on teisaldatud.",
        button: "Tagasi avalehele"
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
            <ReportProblemIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h2" component="h1" gutterBottom>
                {t.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                {t.message}
            </Typography>
            <Button
                component={RouterLink}
                to="/"
                variant="contained"
                color="primary"
                size="large"
            >
                {t.button}
            </Button>
        </Container>
    );
};

export default NotFound;
