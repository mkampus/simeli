// src/components/quote/QuoteButton.jsx
import React, { useContext } from 'react';
import { Fab, Badge, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { QuoteContext } from '../../context/QuoteContext';

const QuoteButton = ({ onClick }) => {
    const { quoteItems, calculateTotals } = useContext(QuoteContext);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Get new totals format
    const { itemCount, totalGrossPrice } = calculateTotals();

    if (itemCount === 0) {
        return null;
    }

    return (
        <Tooltip title={`€${totalGrossPrice.toFixed(2)}`}>
            <Fab
                color="primary"
                aria-label="Ava hinnapäring"
                onClick={onClick}
                sx={{
                    position: 'fixed',
                    bottom: isMobile ? 24 : 32,
                    right: isMobile ? 24 : 32,
                    zIndex: 1000,
                }}
            >
                <Badge
                    badgeContent={itemCount}
                    color="secondary"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <ShoppingCartIcon />
                </Badge>
            </Fab>
        </Tooltip>
    );
};

export default QuoteButton;