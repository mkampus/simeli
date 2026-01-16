// src/components/common/Button.jsx
import React from "react";
import MuiButton from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

const Button = ({ children, variant = "contained", color = "primary", to, component, href, ...rest }) => {
    let Component = component;
    if (!Component) {
        Component = to ? RouterLink : (href ? "a" : "button");
    }

    const buttonProps = {
        variant,
        color,
        component: Component,
        ...(to && Component === RouterLink && { to }),
        ...(href && Component === "a" && { href }),
        ...rest,
    };

    return <MuiButton {...buttonProps}>{children}</MuiButton>;
};

export default Button;
