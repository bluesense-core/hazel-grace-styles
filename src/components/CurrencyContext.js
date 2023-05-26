import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const getCurrencySign = (currency) => {
        switch (currency) {
            case 'usd':
                return '$';
            case 'gbp':
                return '£';
            case 'eur':
                return '€';
            default:
                return '₦';
        }
    };
    const storedCurrency = localStorage.getItem('selectedCurrency') || 'ngn';
    const [selectedCurrency, setSelectedCurrency] = useState(storedCurrency);
    const [selectedSign, setSelectedSign] = useState(
        getCurrencySign(storedCurrency)
    );
    const [exchangeRates, setExchangeRates] = useState(null);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get(
                    'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/ngn.json'
                );
                setExchangeRates(response.data.ngn);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchExchangeRates();
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedCurrency', selectedCurrency);
        setSelectedSign(getCurrencySign(selectedCurrency));
    }, [selectedCurrency]);

    const convertPrice = (price, currency) => {
        if (!exchangeRates || !exchangeRates[currency]) {
            return price;
        }

        const rate = exchangeRates[currency];
        return (price * rate).toFixed(2);
    };

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    return (
        <CurrencyContext.Provider
            value={{
                selectedCurrency,
                handleCurrencyChange,
                convertPrice,
                selectedSign,
            }}>
            {children}
        </CurrencyContext.Provider>
    );
};
