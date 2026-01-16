import React, { createContext, useState, useCallback, useEffect } from 'react';

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
    const [quoteItems, setQuoteItems] = useState(() => {
        try {
            const localData = localStorage.getItem('simeli_quote_cart');
            return localData ? JSON.parse(localData) : [];
        } catch (e) {
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
                    item.length === product.length
            );

            if (existingIndex > -1) {
                const updated = [...prevItems];
                updated[existingIndex].quantity += quantity;
                return updated;
            }
            return [...prevItems, { ...product, quantity }];
        });
    }, []);

    const updateQuantity = useCallback((width, height, length, newQuantity) => {
        if (newQuantity <= 0) {
            setQuoteItems(prev => prev.filter(i => !(i.width === width && i.height === height && i.length === length)));
            return;
        }
        setQuoteItems(prev => prev.map(item =>
            (item.width === width && item.height === height && item.length === length)
                ? { ...item, quantity: newQuantity } : item
        ));
    }, []);

    const removeItem = useCallback((width, height, length) => {
        setQuoteItems(prev => prev.filter(i => !(i.width === width && i.height === height && i.length === length)));
    }, []);

    const clearQuote = useCallback(() => setQuoteItems([]), []);

    const calculateTotals = useCallback(() => {
        const totalPrice = quoteItems.reduce((sum, item) => sum + (item.piecePrice * item.quantity), 0);
        const itemCount = quoteItems.reduce((sum, item) => sum + item.quantity, 0);
        return { totalPrice, itemCount };
    }, [quoteItems]);

    return (
        <QuoteContext.Provider value={{
            quoteItems, addToQuote, updateQuantity, removeItem,
            clearQuote, calculateTotals, isDrawerOpen,
            openDrawer: () => setIsDrawerOpen(true),
            closeDrawer: () => setIsDrawerOpen(false)
        }}>
            {children}
        </QuoteContext.Provider>
    );
};