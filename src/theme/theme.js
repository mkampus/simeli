// src/theme.js
import { createTheme } from "@mui/material/styles";

// Simeli Saeveski värvipalett
const palette = {
    primary: {
        main: "#3a5a40", // Tume roheline
        contrastText: "#ffffff",
    },
    secondary: {
        main: "#a3b18a", // Heledam rohekas/beež
        contrastText: "#333333",
    },
    error: {
        main: "#d32f2f",
    },
    background: {
        default: "#f8f7f2", // Veidi soe valge taust
        paper: "#ffffff",
    },
    text: {
        primary: "#333333",
        secondary: "#5c5c5c",
    },
};

const theme = createTheme({
    palette: palette,
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: "2.5rem",
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: 1.2,
        },
        h3: {
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: 1.2,
        },
        button: {
            textTransform: "none",
            fontWeight: 700,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    padding: "10px 20px",
                },
            },
            defaultProps: {
                disableElevation: true, // Optional: remove button shadow
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: 8,
                },
            },
        },
        MuiAppBar: { // Example: Styling the AppBar (Header)
            styleOverrides: {
                root: {
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Softer shadow for header
                }
            }
        }
    },
});

export default theme;
