// src/components/CurrencyConverter.jsx
//import React, { useState } from 'react';
import './CurrencyConverter.css';

export default function CurrencyConverter({ basePriceUSD }) {
  const [currency, setCurrency] = useState('USD');

  // Exchange rates relative to USD (approximate rates)
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    KES: 130
  };

  const symbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    KES: 'Ksh '
  };

  const convertedPrice = Math.round(basePriceUSD * rates[currency]);

  return (
    <div className="currency-converter-widget">
      <label>Select Currency: </label>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
        <option value="GBP">GBP (£)</option>
        <option value="KES">KES (Ksh)</option>
      </select>
      <div className="converted-display">
        Price: <strong>{symbols[currency]}{convertedPrice.toLocaleString()}</strong>
      </div>
    </div>
  );
}