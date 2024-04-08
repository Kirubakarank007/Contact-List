import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const CurrencyRates = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const currencies = ['EUR', 'GBP', 'JPY', 'AUD', 'CAD'];
  const [layout, setLayout] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`);
        const data = await response.json();
        setRates(data.rates);
        // If layout is not set, initialize the layout
        if (layout.length === 0) {
          const initialLayout = currencies.map((currency, index) => ({
            i: currency,
            x: index % 3,
            y: Math.floor(index / 3),
            w: 1,
            h: 1,
          }));
          setLayout(initialLayout);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRates();
  }, [baseCurrency, layout.length, currencies]);

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  const toggleFavorite = (currency) => {
    setFavorites(prevFavorites => {
      const newFavorites = { ...prevFavorites };
      newFavorites[currency] = !newFavorites[currency];
      return newFavorites;
    });
  };

  return (
    <div>
      <h2>Live Currency Rates</h2>
      <div>
        <label htmlFor="baseCurrency">Base Currency:</label>
        <select id="baseCurrency" value={baseCurrency} onChange={handleBaseCurrencyChange}>
          {currencies.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className="tiles-container">
        <GridLayout className="layout" layout={layout} cols={3} rowHeight={100} width={600} onLayoutChange={onLayoutChange}>
          {currencies.map(currency => (
            <div key={currency} className={`tile ${favorites[currency] ? 'favorite' : ''}`}>
              <h3>{currency}</h3>
              <p>{rates && rates[currency]}</p>
              <button onMouseEnter={() => toggleFavorite(currency)}>
                {favorites[currency] ? 'Unstar' : 'Star'}
              </button>
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
};

export default CurrencyRates;
