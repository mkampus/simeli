// src/context/QuoteContext.js
import React, { createContext, useState, useCallback, useEffect } from 'react';

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
    const [quoteItems, setQuoteItems] = useState(() => {
        try {
            const localData = localStorage.getItem('simeli_quote_cart');
            if (!localData) return [];
            const parsed = JSON.parse(localData);
            if (!Array.isArray(parsed)) {
                console.warn('Invalid quote cart data in localStorage, clearing it');
                localStorage.removeItem('simeli_quote_cart');
                return [];
            }
            return parsed;
        } catch (e) {
            console.error('Failed to parse localStorage quote cart:', e);
            localStorage.removeItem('simeli_quote_cart');
            return [];
        }
    });

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('simeli_quote_cart', JSON.stringify(quoteItems));
    }, [quoteItems]);

    const addToQuote = useCallback((product, quantity) => {
        setQuoteItems(prevItems => {
            const existingIndex = prevItems.findIndex(
                item => item.width === product.width &&
                    item.height === product.height &&
                    item.lengthMm === product.lengthMm
            );

            if (existingIndex > -1) {
                const updated = [...prevItems];
                updated[existingIndex].quantity += quantity;
                return updated;
            }
            return [...prevItems, { ...product, quantity }];
        });
    }, []);

    const updateQuantity = useCallback((width, height, lengthMm, newQuantity) => {
        if (newQuantity <= 0) {
            setQuoteItems(prev => prev.filter(i => !(i.width === width && i.height === height && i.lengthMm === lengthMm)));
            return;
        }
        setQuoteItems(prev => prev.map(item =>
            (item.width === width && item.height === height && item.lengthMm === lengthMm)
                ? { ...item, quantity: newQuantity }
                : item
        ));
    }, []);

    const removeItem = useCallback((width, height, lengthMm) => {
        setQuoteItems(prev => prev.filter(i => !(i.width === width && i.height === height && i.lengthMm === lengthMm)));
    }, []);

    const clearQuote = useCallback(() => setQuoteItems([]), []);

    const calculateTotals = useCallback(() => {
        const totals = quoteItems.reduce((acc, item) => {
            const itemTotalNet = item.priceWithoutVat * item.quantity;
            const itemTotalGross = item.priceWithVat * item.quantity;
            const itemVat = itemTotalGross - itemTotalNet;

            return {
                totalNetPrice: acc.totalNetPrice + itemTotalNet,
                totalGrossPrice: acc.totalGrossPrice + itemTotalGross,
                totalVatAmount: acc.totalVatAmount + itemVat,
                itemCount: acc.itemCount + item.quantity,
            };
        }, {
            totalNetPrice: 0,
            totalGrossPrice: 0,
            totalVatAmount: 0,
            itemCount: 0,
        });

        return totals;
    }, [quoteItems]);

    return (
        <QuoteContext.Provider value={{
            quoteItems,
            addToQuote,
            updateQuantity,
            removeItem,
            clearQuote,
            calculateTotals,
            isDrawerOpen,
            openDrawer: () => setIsDrawerOpen(true),
            closeDrawer: () => setIsDrawerOpen(false)
        }}>
            {children}
        </QuoteContext.Provider>
    );
};