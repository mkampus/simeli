// src/components/common/Button.jsx
import React from "react";
import MuiButton from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

const Button = ({
                    children,
                    variant = "contained",
                    color = "primary",
                    to,
                    component,
                    href,
                    ...rest
                }) => {
    const buttonProps = {
        variant,
        color,
        // Determine the component type: RouterLink if 'to' is provided, 'a' if 'href', otherwise 'button'
        component: component || (to ? RouterLink : href ? "a" : "button"),
        // Pass 'to' or 'href' only if the component is a link type
        ...(to && { to }),
        ...(href && { href }),
        ...rest, // Pass down other props like onClick, disabled, sx, startIcon, etc.
    };

    return <MuiButton {...buttonProps}>{children}</MuiButton>;
};

export default Button;
