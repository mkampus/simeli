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
    const { totalPrice, itemCount } = calculateTotals();

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
                    quoteItems.map((item) => (
                        <ListItem
                            key={`${item.width}-${item.height}-${item.length}`}
                            sx={{ borderBottom: '1px solid', borderColor: 'divider', py: 2, flexDirection: 'column', alignItems: 'flex-start' }}
                        >
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {item.width}×{item.height}mm – {item.lengthLabel}
                                </Typography>
                                <IconButton size="small" color="error" onClick={() => removeItem(item.width, item.height, item.length)}>
                                    <DeleteOutlineIcon fontSize="small" />
                                </IconButton>
                            </Box>

                            <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
                                <Stack direction="row" alignItems="center" sx={{ border: '1px solid #ccc', borderRadius: 1 }}>
                                    <IconButton size="small" onClick={() => updateQuantity(item.width, item.height, item.length, item.quantity - 1)}>
                                        <RemoveIcon fontSize="small" />
                                    </IconButton>
                                    <Typography sx={{ px: 2, minWidth: 40, textAlign: 'center' }}>{item.quantity}</Typography>
                                    <IconButton size="small" onClick={() => updateQuantity(item.width, item.height, item.length, item.quantity + 1)}>
                                        <AddIcon fontSize="small" />
                                    </IconButton>
                                </Stack>
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography variant="subtitle2">
                                    {(item.piecePrice * item.quantity).toFixed(2)}€
                                </Typography>
                            </Stack>
                        </ListItem>
                    ))
                )}
            </List>

            <Box sx={{ p: 3, bgcolor: 'background.default', borderTop: '1px solid', borderColor: 'divider' }}>
                <Stack direction="row" justifyContent="space-between" mb={2}>
                    <Typography variant="h6">Kokku:</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{totalPrice.toFixed(2)}€</Typography>
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