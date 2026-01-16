// src/components/contact/ContactInfo.jsx
import React from 'react';
import { Box, Typography, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const contactDetails = {
    address: "Uus tn 9, 78304 Märjamaa, Rapla maakond",
    phone: "+372 58243476",
    email: "simelisaeveski@gmail.com",
    hours: [
        "E-R: 8:00 - 17:00",
        "L: 9:00 - 14:00",
        "P: Suletud"
    ]
};

const ContactInfo = () => {
    return (
        <Box>
            <List disablePadding>
                <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                        <LocationOnIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Aadress"
                        secondary={contactDetails.address}
                        primaryTypographyProps={{ fontWeight: 'bold' }}
                    />
                </ListItem>
                <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                        <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Telefon"
                        secondary={<Link href={`tel:${contactDetails.phone}`} color="inherit" underline="hover">{contactDetails.phone}</Link>}
                        primaryTypographyProps={{ fontWeight: 'bold' }}
                    />
                </ListItem>
                <ListItem disableGutters>
                    <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="E-post"
                        secondary={<Link href={`mailto:${contactDetails.email}`} color="inherit" underline="hover">{contactDetails.email}</Link>}
                        primaryTypographyProps={{ fontWeight: 'bold' }}
                    />
                </ListItem>
                <ListItem disableGutters sx={{ alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 40, color: 'primary.main', mt: 1 }}>
                        <AccessTimeIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Lahtiolekuajad"
                        secondary={
                            <>
                                {contactDetails.hours.map((line, index) => (
                                    <Typography key={index} component="span" display="block" variant="body2">
                                        {line}
                                    </Typography>
                                ))}
                            </>
                        }
                        primaryTypographyProps={{ fontWeight: 'bold' }}
                    />
                </ListItem>
            </List>
        </Box>
    );
};

export default ContactInfo;