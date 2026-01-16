// src/pages/NotFound.jsx
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const NotFound = () => {
    return (
        <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
            <ReportProblemIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h2" component="h1" gutterBottom>
                404 - Lehte ei leitud
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Vabandust, otsitud lehte ei eksisteeri või see on teisaldatud.
            </Typography>
            <Button
                component={RouterLink}
                to="/"
                variant="contained"
                color="primary"
                size="large"
            >
                Tagasi avalehele
            </Button>
        </Container>
    );
};

export default NotFound;