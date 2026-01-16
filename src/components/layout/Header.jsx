// src/components/layout/Header.jsx
import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Box, IconButton,
    Drawer, List, ListItem, ListItemButton, ListItemText, Divider,
    ListItemIcon
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '../common/Button';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { label: "Avaleht", path: '/' },
        { label: "Kontakt", path: '/kontakt', variant: 'contained', color: 'primary' }
    ];

    const drawer = (
        <Box sx={{ width: 250 }} role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to="/" onClick={handleDrawerToggle}>
                        <ListItemText primary="Avaleht" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to="/kontakt" onClick={handleDrawerToggle}>
                        <ListItemText primary="Kontakt & Kalkulaator" />
                    </ListItemButton>
                </ListItem>
                <Divider sx={{ my: 1 }} />
                <ListItem disablePadding>
                    <ListItemButton component="a" href="tel:+37258243476" onClick={handleDrawerToggle}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                            <PhoneIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Helista" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component="a"
                        href="https://wa.me/37258243476"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleDrawerToggle}
                    >
                        <ListItemIcon sx={{ minWidth: 32 }}>
                            <Typography sx={{ fontSize: '1.25rem' }}>💬</Typography>
                        </ListItemIcon>
                        <ListItemText primary="WhatsApp" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky" color="background" sx={{ mb: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        sx={{ flexGrow: 1, textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}
                    >
                        Simeli Saeveski
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component={RouterLink}
                                to={item.path}
                                color={item.color || "inherit"}
                                variant={item.variant || "text"}
                                sx={item.variant === 'contained' ? { ml: 1 } : {}}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <Button
                            href="tel:+37258243476"
                            color="primary"
                            variant="outlined"
                            startIcon={<PhoneIcon />}
                            sx={{ ml: 2 }}
                        >
                            Helista
                        </Button>
                        <Button
                            href="https://wa.me/37258243476"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="success"
                            variant="contained"
                            sx={{ ml: 1 }}
                        >
                            💬 WhatsApp
                        </Button>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <IconButton
                            href="tel:+37258243476"
                            color="primary"
                            aria-label="helista"
                        >
                            <PhoneIcon />
                        </IconButton>
                        <IconButton
                            edge="end"
                            color="primary"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;