// src/components/quote/QuoteRequestDrawer.jsx
import React, { useContext } from 'react';
import {
    Drawer, Box, Typography, List, ListItem, ListItemText,
    IconButton, Button, Divider, Stack, useTheme, useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { QuoteContext } from '../../context/QuoteContext';

const QuoteRequestDrawer = ({ open, onClose, onSubmit }) => {
    const { quoteItems, removeItem, updateQuantity, calculateTotals } = useContext(QuoteContext);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Get the new totals format
    const { totalNetPrice, totalGrossPrice, totalVatAmount, itemCount } = calculateTotals();

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            variant="temporary"
            PaperProps={{
                sx: {
                    width: isMobile ? '100%' : 400,
                    boxShadow: theme.shadows[10],
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Minu päring ({itemCount})</Typography>
                <IconButton onClick={onClose}><CloseIcon /></IconButton>
            </Box>

            <Divider />

            <List sx={{ flexGrow: 1, overflowY: 'auto', p: 0 }}>
                {quoteItems.length === 0 ? (
                    <Box sx={{ p: 4, textAlign: 'center' }}>
                        <Typography color="text.secondary">Päring on tühi</Typography>
                    </Box>
                ) : (
                    quoteItems.map((item) => {
                        const itemTotalNet = item.priceWithoutVat * item.quantity;
                        const itemTotalGross = item.priceWithVat * item.quantity;

                        return (
                            <ListItem
                                key={`${item.width}-${item.height}-${item.lengthMm}`}
                                sx={{ borderBottom: '1px solid', borderColor: 'divider', py: 2, flexDirection: 'column', alignItems: 'flex-start' }}
                            >
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        {item.width}×{item.height}mm – {item.lengthLabel}
                                    </Typography>
                                    <IconButton size="small" color="error" onClick={() => removeItem(item.width, item.height, item.lengthMm)}>
                                        <DeleteOutlineIcon fontSize="small" />
                                    </IconButton>
                                </Box>

                                <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%', mb: 1 }}>
                                    <Stack direction="row" alignItems="center" sx={{ border: '1px solid #ccc', borderRadius: 1 }}>
                                        <IconButton size="small" onClick={() => updateQuantity(item.width, item.height, item.lengthMm, item.quantity - 1)}>
                                            <RemoveIcon fontSize="small" />
                                        </IconButton>
                                        <Typography sx={{ px: 2, minWidth: 40, textAlign: 'center' }}>{item.quantity}</Typography>
                                        <IconButton size="small" onClick={() => updateQuantity(item.width, item.height, item.lengthMm, item.quantity + 1)}>
                                            <AddIcon fontSize="small" />
                                        </IconButton>
                                    </Stack>
                                </Stack>

                                {/* Price breakdown */}
                                <Box sx={{ width: '100%', fontSize: '0.85rem', ml: 1 }}>
                                    <Typography variant="caption" color="text.secondary">
                                        Ilma KM-ta: €{itemTotalNet.toFixed(2)}
                                    </Typography>
                                    <br />
                                    <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        KM-ga: €{itemTotalGross.toFixed(2)}
                                    </Typography>
                                </Box>
                            </ListItem>
                        );
                    })
                )}
            </List>

            <Box sx={{ p: 3, bgcolor: 'background.default', borderTop: '1px solid', borderColor: 'divider' }}>
                <Stack spacing={1} mb={2}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2">Kokku (ilma KM-ta):</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            €{totalNetPrice.toFixed(2)}
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2">KM (24%):</Typography>
                        <Typography variant="body2" sx={{ color: 'warning.main' }}>
                            +€{totalVatAmount.toFixed(2)}
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>KOKKU:</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            €{totalGrossPrice.toFixed(2)}
                        </Typography>
                    </Stack>
                </Stack>
                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={onSubmit}
                    disabled={quoteItems.length === 0}
                >
                    Saada päring
                </Button>
            </Box>
        </Drawer>
    );
};

export default QuoteRequestDrawer;