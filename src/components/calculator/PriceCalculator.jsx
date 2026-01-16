import React, { useState, useEffect, useContext } from 'react';
import {
    Box, Grid, Paper, Typography, TextField,
    MenuItem, FormControl, InputLabel, Select,
    Button, Stack, Alert, Tabs, Tab,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Fade
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

    // BUG FIX #1: No default length
    const [selectedLength, setSelectedLength] = useState(null);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [availableWidths, setAvailableWidths] = useState([]);
    const [availableHeights, setAvailableHeights] = useState([]);
    const [calculation, setCalculation] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    // Update widths when length changes
    useEffect(() => {
        if (selectedLength) {
            const widths = getAvailableWidths(selectedLength);
            setAvailableWidths(widths);
            setWidth('');
            setHeight('');
            setCalculation(null);
        }
    }, [selectedLength]);

    // Update heights when width changes
    useEffect(() => {
        if (selectedLength && width) {
            const heights = getAvailableHeights(selectedLength, width);
            setAvailableHeights(heights);
            setHeight('');
            setCalculation(null);
        }
    }, [selectedLength, width]);

    // Calculate detailed price breakdown
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

    // BUG FIX #2 & #3: Reset calculator after adding product
    const handleAdd = () => {
        if (calculation) {
            addToQuote(calculation, quantity);
            setShowSuccess(true);

            // Reset form after 1.5 seconds
            setTimeout(() => {
                setShowSuccess(false);
                // RESET ALL FORM STATE
                setSelectedLength(null);
                setWidth('');
                setHeight('');
                setQuantity(1);
                setAvailableWidths([]);
                setAvailableHeights([]);
                setCalculation(null);
            }, 1500);
        }
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

            {/* BUG FIX #1: Only show form when length is selected */}
            {selectedLength ? (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 3 }}>
                            <Grid container spacing={2}>
                                {/* Laius (Width) */}
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

                                {/* Paksus (Height) */}
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

                                {/* Kogus (Quantity) */}
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

                            {/* Price calculation table */}
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
                                                <TableRow>
                                                    <TableCell>
                                                        {calculation.lengthLabel}, {width}x{height}mm
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {calculation.piecePrice.toFixed(2)}€
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {calculation.totalGross}€
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell colSpan={2} sx={{ fontWeight: 'bold' }}>
                                                        Kokku (sh KM 24%)
                                                    </TableCell>
                                                    <TableCell
                                                        align="right"
                                                        sx={{ fontWeight: 'bold', color: 'primary.main', fontSize: '1.1rem' }}
                                                    >
                                                        {calculation.totalGross}€
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                                        Jooksev meeter: {calculation.pricePerM}€/m | KM osa: {calculation.vatAmount}€
                                    </Typography>

                                    <Box sx={{ mt: 3, position: 'relative' }}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            size="large"
                                            startIcon={<CalculateIcon />}
                                            onClick={handleAdd}
                                            disabled={showSuccess}
                                        >
                                            Lisa päringusse
                                        </Button>

                                        <Fade in={showSuccess}>
                                            <Alert
                                                icon={<CheckCircleOutlineIcon fontSize="inherit" />}
                                                severity="success"
                                                sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}
                                            >
                                                Toode edukalt lisatud!
                                            </Alert>
                                        </Fade>
                                    </Box>
                                </Box>
                            )}
                        </Paper>
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
                        Alusta, valides materjali pikkuse ülal olevate valikute hulgast.
                    </Typography>
                </Alert>
            )}
        </Box>
    );
};

export default PriceCalculator;