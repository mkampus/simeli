// src/theme.js
import { createTheme } from "@mui/material/styles";

// Simeli Saeveski värvipalett (kohanda vastavalt vajadusele)
const palette = {
    primary: {
        main: "#3a5a40", // Tume roheline (nagu eelnevas CSS-is)
        contrastText: "#ffffff",
    },
    secondary: {
        main: "#a3b18a", // Heledam rohekas/beež
        contrastText: "#333333",
    },
    error: {
        main: "#d32f2f", // Punane vigade jaoks
    },
    background: {
        default: "#f8f7f2", // Veidi soe valge taust
        paper: "#ffffff", // Komponentide (nt kaardid) taust
    },
    text: {
        primary: "#333333", // Põhitekst
        secondary: "#5c5c5c", // Sekundaarne tekst
    },
};

const theme = createTheme({
    palette: palette,
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Sama font, mis CSS-is
        h1: {
            fontWeight: 700,
            fontSize: "2.5rem", // Vastab eelnevale CSS-ile
        },
        h2: {
            fontWeight: 700,
            fontSize: "2rem",
        },
        h3: {
            fontWeight: 700,
            fontSize: "1.5rem",
        },
        button: {
            textTransform: "none", // Jätame nupu teksti normaalseks (mitte UPPERCASE)
            fontWeight: 700,
        },
    },
    components: {
        // Siin saame kohandada konkreetsete MUI komponentide vaikestiile
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4, // Ümarad nurgad nagu CSS-is
                    padding: "10px 20px", // Kohandame veidi paddingut
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Vari nagu CSS-is
                    borderRadius: 8,
                },
            },
        },
        // Lisa siia veel komponentide kohandusi vastavalt vajadusele
    },
});

export default theme;
