// src/data/lumberPricesByLength.js

const VAT_RATE = 0.24; // 24% VAT

const lumberPricesByLength = {

    3000: {
        lengthMm: 3000,
        lengthLabel: "3m",
        cubicMeterPrice: 310.00,
        products: [
            { width: 25, height: 50, priceWithoutVat: 1.16 },
            { width: 50, height: 50, priceWithoutVat: 2.32 },
            { width: 25, height: 100, priceWithoutVat: 2.32 },
            { width: 25, height: 150, priceWithoutVat: 3.49 },
            { width: 25, height: 200, priceWithoutVat: 4.65 },
            { width: 50, height: 100, priceWithoutVat: 4.65 },
            { width: 50, height: 150, priceWithoutVat: 6.98 },
            { width: 50, height: 200, priceWithoutVat: 9.30 },
            { width: 100, height: 100, priceWithoutVat: 9.30 },
            { width: 100, height: 150, priceWithoutVat: 13.95 },
            { width: 100, height: 200, priceWithoutVat: 18.60 },
            { width: 20, height: 90, priceWithoutVat: 1.73 },
            { width: 75, height: 90, priceWithoutVat: 6.28 },
            { width: 25, height: 90, priceWithoutVat: 2.09 },
        ]
    },
    3600: {
        lengthMm: 3600,
        lengthLabel: "3,6m",
        cubicMeterPrice: 315.00,
        products: [
            { width: 25, height: 50, priceWithoutVat: 1.42 },
            { width: 50, height: 50, priceWithoutVat: 2.84 },
            { width: 25, height: 100, priceWithoutVat: 2.84 },
            { width: 25, height: 150, priceWithoutVat: 4.25 },
            { width: 25, height: 200, priceWithoutVat: 5.67 },
            { width: 50, height: 100, priceWithoutVat: 5.67 },
            { width: 50, height: 150, priceWithoutVat: 8.50 },
            { width: 50, height: 200, priceWithoutVat: 11.34 },
            { width: 100, height: 100, priceWithoutVat: 11.34 },
            { width: 100, height: 150, priceWithoutVat: 17.01 },
            { width: 100, height: 200, priceWithoutVat: 22.68 },
        ]
    },
    4200: {
        lengthMm: 4200,
        lengthLabel: "4,2m",
        cubicMeterPrice: 320.00,
        products: [
            { width: 25, height: 50, priceWithoutVat: 1.68 },
            { width: 50, height: 50, priceWithoutVat: 3.36 },
            { width: 25, height: 100, priceWithoutVat: 3.36 },
            { width: 25, height: 150, priceWithoutVat: 5.04 },
            { width: 25, height: 200, priceWithoutVat: 6.72 },
            { width: 50, height: 100, priceWithoutVat: 6.72 },
            { width: 50, height: 150, priceWithoutVat: 10.08 },
            { width: 50, height: 200, priceWithoutVat: 13.44 },
            { width: 100, height: 100, priceWithoutVat: 13.44 },
            { width: 100, height: 150, priceWithoutVat: 20.16 },
            { width: 100, height: 200, priceWithoutVat: 26.88 },
            { width: 20, height: 90, priceWithoutVat: 2.42 },
        ]
    },
    5100: {
        lengthMm: 5100,
        lengthLabel: "5,1m",
        cubicMeterPrice: 330.00,
        products: [
            { width: 25, height: 50, priceWithoutVat: 2.10 },
            { width: 50, height: 50, priceWithoutVat: 4.21 },
            { width: 25, height: 100, priceWithoutVat: 4.21 },
            { width: 25, height: 150, priceWithoutVat: 6.31 },
            { width: 25, height: 200, priceWithoutVat: 8.42 },
            { width: 50, height: 100, priceWithoutVat: 8.42 },
            { width: 50, height: 150, priceWithoutVat: 12.62 },
            { width: 50, height: 200, priceWithoutVat: 16.83 },
            { width: 50, height: 250, priceWithoutVat: 21.04 },
            { width: 100, height: 100, priceWithoutVat: 16.83 },
            { width: 100, height: 150, priceWithoutVat: 25.25 },
            { width: 100, height: 200, priceWithoutVat: 33.66 },
        ]
    },
    6000: {
        lengthMm: 6000,
        lengthLabel: "6m",
        cubicMeterPrice: 360.00,
        products: [
            { width: 25, height: 50, priceWithoutVat: 2.70 },
            { width: 50, height: 50, priceWithoutVat: 5.40 },
            { width: 25, height: 100, priceWithoutVat: 5.40 },
            { width: 25, height: 150, priceWithoutVat: 8.10 },
            { width: 50, height: 100, priceWithoutVat: 10.80 },
            { width: 50, height: 150, priceWithoutVat: 16.20 },
            { width: 50, height: 200, priceWithoutVat: 21.60 },
            { width: 100, height: 100, priceWithoutVat: 21.60 },
            { width: 100, height: 150, priceWithoutVat: 32.40 },
            { width: 100, height: 200, priceWithoutVat: 43.20 },
            { width: 35, height: 100, priceWithoutVat: 7.56 },
        ]
    }
};

export const getAvailableLengths = () => {
    return Object.keys(lumberPricesByLength)
        .map(key => ({
            lengthMm: parseInt(key),
            lengthLabel: lumberPricesByLength[key].lengthLabel
        }))
        .sort((a, b) => a.lengthMm - b.lengthMm);
};

export const getAvailableWidths = (lengthMm) => {
    const lengthData = lumberPricesByLength[lengthMm];
    if (!lengthData) return [];

    return [...new Set(lengthData.products.map(p => p.width))].sort((a, b) => a - b);
};

export const getAvailableHeights = (lengthMm, width) => {
    const lengthData = lumberPricesByLength[lengthMm];
    if (!lengthData) return [];

    const filtered = width
        ? lengthData.products.filter(p => p.width === width)
        : lengthData.products;

    return [...new Set(filtered.map(p => p.height))].sort((a, b) => a - b);
};

export const findProduct = (lengthMm, width, height) => {
    const lengthData = lumberPricesByLength[lengthMm];
    if (!lengthData) return null;

    const product = lengthData.products.find(
        p => p.width === width && p.height === height
    );

    if (!product) return null;

    // Fixed calculation here:
    const calculatedPriceWithVat = product.priceWithoutVat * (1 + VAT_RATE);

    return {
        length: lengthMm,
        lengthLabel: lengthData.lengthLabel,
        width,
        height,
        priceWithoutVat: product.priceWithoutVat,
        priceWithVat: calculatedPriceWithVat,
        cubicMeterPrice: lengthData.cubicMeterPrice,
        cubicMeterPriceWithVat: lengthData.cubicMeterPrice * (1 + VAT_RATE),
        piecePrice: calculatedPriceWithVat // Now correctly defined
    };
};

export const getSimilarProducts = (currentProduct, maxResults = 5) => {
    const { lengthMm, width, height } = currentProduct;
    const lengthData = lumberPricesByLength[lengthMm];

    if (!lengthData) return [];

    const currentArea = width * height;

    // Same width/height combo
    const sameDimensions = lengthData.products.filter(
        p => p.width === width && p.height === height
    );

    // Similar cross-section area (±20%)
    const similarArea = lengthData.products.filter(p => {
        if (p.width === width && p.height === height) return false;
        const pArea = p.width * p.height;
        const diff = Math.abs(pArea - currentArea) / currentArea;
        return diff <= 0.2;
    });

    const allSimilar = [...sameDimensions, ...similarArea];

    // Remove duplicates
    const unique = allSimilar.filter(
        (item, index, self) =>
            index === self.findIndex(t => t.width === item.width && t.height === item.height)
    );

    // Map them to include VAT for the UI
    return unique.slice(0, maxResults).map(p => ({
        ...p,
        priceWithVat: p.priceWithoutVat * (1 + VAT_RATE),
        cubicMeterPrice: lengthData.cubicMeterPrice,
        cubicMeterPriceWithVat: lengthData.cubicMeterPrice * (1 + VAT_RATE)
    }));
};

export { lumberPricesByLength, VAT_RATE };