import React, { useContext, useState } from 'react';
import { Fab, Badge, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { QuoteContext } from '../../context/QuoteContext';

const QuoteButton = ({ onClick }) => {
    const { quoteItems, calculateTotals } = useContext(QuoteContext);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { itemCount, totalPrice } = calculateTotals();

    if (itemCount === 0) {
        return null;
    }

    return (
        <Tooltip title={`€${totalPrice.toFixed(2)}`}>
            <Fab
                color="primary"
                aria-label="hinnapakkumise nimekirjad"
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