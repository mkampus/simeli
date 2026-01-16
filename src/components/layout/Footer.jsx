// src/components/layout/Footer.jsx
import React from 'react';
import { Box, Container, Typography, Link, Divider, Grid, Paper } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{
            py: 4,
            mt: 'auto',
            bgcolor: 'background.paper',
            borderTop: '1px solid',
            borderColor: 'divider'
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ mb: 4 }}>
                    {/* Column 1: Company Info */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Simeli Saeveski OÜ
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Kohalik saeveski, mis tegeleb puidutöötlemisega ligi 30 aastat.
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <VerifiedIcon sx={{ fontSize: 18, color: 'success.main' }} />
                            <Typography variant="caption">
                                Registreeritud äriregistris
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Column 2: Registration Info */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Äriregistri Andmed
                        </Typography>
                        <Typography variant="caption" display="block" sx={{ mb: 0.5 }}>
                            <strong>Registrikood:</strong> 16857352
                        </Typography>
                        <Typography variant="caption" display="block" sx={{ mb: 0.5 }}>
                            <strong>KM-kood:</strong> EE102676633
                        </Typography>
                        <Typography variant="caption" display="block" sx={{ color: 'success.main' }}>
                            <strong>Registreeritud:</strong> 09.11.2023
                        </Typography>
                    </Grid>

                    {/* Column 3: Contact */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Kontakt
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <Link
                                component="a"
                                href="tel:+37258243476"
                                color="inherit"
                                underline="hover"
                            >
                                +372 58243476
                            </Link>
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            <Link
                                component="a"
                                href="mailto:simelisaeveski@gmail.com"
                                color="inherit"
                                underline="hover"
                            >
                                simelisaeveski@gmail.com
                            </Link>
                        </Typography>
                        <Typography variant="body2">
                            <Link
                                component="a"
                                href="https://wa.me/37258243476"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                                underline="hover"
                            >
                                💬 WhatsApp
                            </Link>
                        </Typography>
                    </Grid>

                    {/* Column 4: Address */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Asukoht
                        </Typography>
                        <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                            Orgita tee 11<br />
                            Orgita küla<br />
                            Märjamaa vald<br />
                            78313 Rapla maakond
                        </Typography>
                        <Link
                            href="https://maps.google.com/maps?q=Orgita+tee+11,+Orgita,+78313"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="caption"
                            color="primary"
                            underline="hover"
                        >
                            Vaata kaardil →
                        </Link>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                {/* Bottom Links */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    flexWrap: 'wrap',
                    mb: 3
                }}>
                    <Link
                        href="#"
                        color="text.secondary"
                        underline="hover"
                        sx={{ fontSize: '0.875rem' }}
                    >
                        Privaatsuspoliitika
                    </Link>
                    <Typography variant="body2" color="text.secondary">•</Typography>
                    <Link
                        href="#"
                        color="text.secondary"
                        underline="hover"
                        sx={{ fontSize: '0.875rem' }}
                    >
                        Kasutustingimused
                    </Link>
                    <Typography variant="body2" color="text.secondary">•</Typography>
                    <Link
                        href="#"
                        color="text.secondary"
                        underline="hover"
                        sx={{ fontSize: '0.875rem' }}
                    >
                        Tarnetingimused
                    </Link>
                </Box>

                <Typography variant="body2" color="text.secondary" align="center">
                    © {currentYear} Simeli Saeveski OÜ. Kõik õigused kaitstud.
                </Typography>
                <Typography
                    variant="caption"
                    color="text.secondary"
                    align="center"
                    sx={{
                        mt: 1,
                        display: 'block',
                        fontSize: '0.75rem'
                    }}
                >
                    Registrikood: 16857352 | KM-kood: EE102676633
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;