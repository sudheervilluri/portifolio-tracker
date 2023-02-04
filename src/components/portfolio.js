import React, { useState } from 'react';

const Portfolio = () => {
  const [stocks, setStocks] = useState([]);

  const addStock = (symbol, quantity) => {
    setStocks([...stocks, { symbol, quantity }]);
  };

  const buyStock = (symbol, quantity) => {
    setStocks(stocks.map((stock) => {
      if (stock.symbol === symbol) {
        return { ...stock, quantity: stock.quantity + quantity };
      }
      return stock;
    }));
  };

  const sellStock = (symbol, quantity) => {
    setStocks(stocks.map((stock) => {
      if (stock.symbol === symbol) {
        return { ...stock, quantity: stock.quantity - quantity };
      }
      return stock;
    }));
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <button onClick={() => addStock('AAPL', 100)}>Add Stock</button>
      <ul>
        {stocks.map((stock, index) => (
          <li key={index}>
            {stock.symbol} - {stock.quantity} shares
            <button onClick={() => buyStock(stock.symbol, 100)}>Buy</button>
            <button onClick={() => sellStock(stock.symbol, 100)}>Sell</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
