// src/components/common/Button.jsx
import React from "react";
import MuiButton from "@mui/material/Button"; // Impordi MUI nupp
import { Link as RouterLink } from "react-router-dom"; // Impordi React Routeri Link

/**
 * Kohandatud nupu komponent, mis kasutab Material UI nuppu.
 * Toetab nii tavalist nuppu kui ka React Routeri linki.
 * @param {object} props - Komponendi propsid
 * @param {React.ReactNode} props.children - Nupu sisu
 * @param {string} [props.variant="contained"] - Nupu stiil ('contained', 'outlined', 'text')
 * @param {string} [props.color="primary"] - Nupu värv ('primary', 'secondary', 'error', jne)
 * @param {string} [props.to] - Kui määratud, renderdatakse React Routeri lingina
 * @param {object} [props.component] - Võimaldab määrata juurelemendi (nt RouterLink)
 * @param {string} [props.href] - Kui määratud, renderdatakse tavalise lingina
 * @param {function} [props.onClick] - Kliki sündmuse handler
 * @param {boolean} [props.disabled] - Kas nupp on keelatud
 * @param {React.ReactElement} [props.startIcon] - Ikoon nupu alguses
 * @param {React.ReactElement} [props.endIcon] - Ikoon nupu lõpus
 * @param {object} [props.sx] - MUI süsteemi stiilide ülekirjutamine
 */
const Button = ({
                    children,
                    variant = "contained", // Vaikimisi 'contained' (täidetud taustaga)
                    color = "primary",
                    to,
                    component,
                    href,
                    ...rest // Kõik muud MUI Button'i propsid (nt onClick, disabled, startIcon, sx)
                }) => {
    const buttonProps = {
        variant,
        color,
        component: component || (to ? RouterLink : href ? "a" : "button"), // Määrame komponendi tüübi
        to: to, // React Routeri link
        href: href, // Tavaline link
        ...rest,
    };

    return <MuiButton {...buttonProps}>{children}</MuiButton>;
};

export default Button;
