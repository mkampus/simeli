// src/components/calculator/PriceCalculator.jsx
import React, { useState, useEffect, useContext } from 'react';
import {
    Box, Grid, Paper, Typography, TextField,
    MenuItem, FormControl, InputLabel, Select,
    Button, Stack, Alert, Tabs, Tab,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
    getAvailableLengths,
    getAvailableWidths,
    getAvailableHeights,
    findProduct
} from '../../data/lumberPricesByLength';
import { QuoteContext } from '../../context/QuoteContext';

const PriceCalculator = () => {
    const { addToQuote } = useContext(QuoteContext);

    const lengthOptions = getAvailableLengths();

    const [selectedLength, setSelectedLength] = useState(null);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [availableWidths, setAvailableWidths] = useState([]);
    const [availableHeights, setAvailableHeights] = useState([]);
    const [calculation, setCalculation] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (selectedLength) {
            const widths = getAvailableWidths(selectedLength);
            setAvailableWidths(widths);
            setWidth('');
            setHeight('');
            setCalculation(null);
        }
    }, [selectedLength]);

    useEffect(() => {
        if (selectedLength && width) {
            const heights = getAvailableHeights(selectedLength, width);
            setAvailableHeights(heights);
            setHeight('');
            setCalculation(null);
        }
    }, [selectedLength, width]);

    useEffect(() => {
        if (selectedLength && width && height && quantity > 0) {
            const product = findProduct(selectedLength, width, height);
            if (product) {
                const totalNet = product.priceWithoutVat * quantity;
                const totalGross = product.priceWithVat * quantity;
                setCalculation({
                    ...product,
                    totalNet: totalNet.toFixed(2),
                    totalGross: totalGross.toFixed(2),
                    vatAmount: (totalGross - totalNet).toFixed(2),
                    pricePerM: (product.priceWithVat / (selectedLength / 1000)).toFixed(2)
                });
            }
        }
    }, [selectedLength, width, height, quantity]);

    const handleAdd = () => {
        if (calculation) {
            // Ensure we pass all needed data to QuoteContext
            const quoteItem = {
                lengthMm: selectedLength,
                lengthLabel: calculation.lengthLabel,
                width: parseInt(calculation.width),
                height: parseInt(calculation.height),
                // Prices PER PIECE
                priceWithoutVat: parseFloat(calculation.priceWithoutVat),
                priceWithVat: parseFloat(calculation.priceWithVat),
                // Totals for this line item
                totalNet: parseFloat(calculation.totalNet),
                totalGross: parseFloat(calculation.totalGross),
                vatAmount: parseFloat(calculation.vatAmount),
                // For display
                lengthMm: selectedLength,
            };

            addToQuote(quoteItem, quantity);
            setShowSuccess(true);
        }
    };

    const formatPrice = (price) => {
        return parseFloat(price).toFixed(2).replace('.', ',');
    };

    return (
        <Box>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                1. Vali materjali pikkus:
            </Typography>

            <Tabs
                value={selectedLength || false}
                onChange={(e, val) => setSelectedLength(val)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ mb: 4, bgcolor: 'background.paper' }}
            >
                {lengthOptions.map((opt) => (
                    <Tab key={opt.lengthMm} label={opt.lengthLabel} value={opt.lengthMm} />
                ))}
            </Tabs>

            {selectedLength ? (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {showSuccess ? (
                            <Paper sx={{ p: 3, bgcolor: '#c8e6c9', border: '2px solid #4caf50', minHeight: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                <CheckCircleOutlineIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
                                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    ✓ Toode lisatud!
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                                    Toode on teie hinnapäringule lisatud. Saate jätkata teiste toodete lisamisega.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        setShowSuccess(false);
                                        setAvailableWidths(getAvailableWidths(selectedLength));
                                        setWidth('');
                                        setHeight('');
                                        setQuantity(1);
                                        setAvailableHeights([]);
                                        setCalculation(null);
                                    }}
                                >
                                    Lisa veel tooteid
                                </Button>
                            </Paper>
                        ) : (
                            <Paper sx={{ p: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <FormControl fullWidth>
                                            <InputLabel>Laius (mm)</InputLabel>
                                            <Select
                                                value={width}
                                                label="Laius (mm)"
                                                onChange={(e) => setWidth(e.target.value)}
                                            >
                                                {availableWidths.map(w => (
                                                    <MenuItem key={w} value={w}>{w} mm</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <FormControl fullWidth disabled={!width}>
                                            <InputLabel>Paksus (mm)</InputLabel>
                                            <Select
                                                value={height}
                                                label="Paksus (mm)"
                                                onChange={(e) => setHeight(e.target.value)}
                                            >
                                                {availableHeights.map(h => (
                                                    <MenuItem key={h} value={h}>{h} mm</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth
                                            label="Kogus (tk)"
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        />
                                    </Grid>
                                </Grid>

                                {calculation && (
                                    <Box sx={{ mt: 4 }}>
                                        <TableContainer component={Paper} variant="outlined">
                                            <Table size="small">
                                                <TableHead sx={{ bgcolor: 'grey.50' }}>
                                                    <TableRow>
                                                        <TableCell>Kirjeldus</TableCell>
                                                        <TableCell align="right">Ühikuhind</TableCell>
                                                        <TableCell align="right">Summa</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {/* Row 1: Unit price WITHOUT VAT */}
                                                    <TableRow>
                                                        <TableCell>
                                                            {calculation.lengthLabel}, {width}×{height}mm
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            €{formatPrice(calculation.priceWithoutVat)}
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            €{formatPrice(calculation.totalNet)}
                                                        </TableCell>
                                                    </TableRow>

                                                    {/* Row 2: SUBTOTAL WITHOUT VAT - HIGHLIGHTED */}
                                                    <TableRow sx={{ bgcolor: '#f5f5f5', fontWeight: 'bold' }}>
                                                        <TableCell colSpan={2} sx={{ fontWeight: 'bold' }}>
                                                            Kokku (ilma KM-ta)
                                                        </TableCell>
                                                        <TableCell
                                                            align="right"
                                                            sx={{ fontWeight: 'bold', fontSize: '1rem' }}
                                                        >
                                                            €{formatPrice(calculation.totalNet)}
                                                        </TableCell>
                                                    </TableRow>

                                                    {/* Row 3: VAT Amount */}
                                                    <TableRow>
                                                        <TableCell colSpan={2} sx={{ fontSize: '0.9rem' }}>
                                                            KM (24%)
                                                        </TableCell>
                                                        <TableCell
                                                            align="right"
                                                            sx={{ fontSize: '0.9rem', color: 'text.secondary' }}
                                                        >
                                                            +€{formatPrice(calculation.vatAmount)}
                                                        </TableCell>
                                                    </TableRow>

                                                    {/* Row 4: TOTAL WITH VAT - MAIN TOTAL */}
                                                    <TableRow sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                                                        <TableCell colSpan={2} sx={{ fontWeight: 'bold', color: 'inherit' }}>
                                                            KOKKU (KM-ga)
                                                        </TableCell>
                                                        <TableCell
                                                            align="right"
                                                            sx={{ fontWeight: 'bold', color: 'inherit', fontSize: '1.2rem' }}
                                                        >
                                                            €{formatPrice(calculation.totalGross)}
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                                            Hind meetri kohta (KM-ga): €{calculation.pricePerM}/m
                                        </Typography>

                                        <Button
                                            fullWidth
                                            variant="contained"
                                            size="large"
                                            startIcon={<CalculateIcon />}
                                            onClick={handleAdd}
                                            sx={{ mt: 3 }}
                                        >
                                            Lisa hinnapäringule
                                        </Button>
                                    </Box>
                                )}
                            </Paper>
                        )}
                    </Grid>

                    <Grid item xs={12}>
                        <Alert severity="info">
                            <Typography variant="body2">
                                Hinnad on orienteeruvad. Suuremate koguste puhul küsi eripakkumist!
                            </Typography>
                        </Alert>
                    </Grid>
                </Grid>
            ) : (
                <Alert severity="info">
                    <Typography variant="body2">
                        Vali materjali pikkus ülal olevate valikute hulgast.
                    </Typography>
                </Alert>
            )}
        </Box>
    );
};

export default PriceCalculator;