import React, { useState } from 'react';
import { css, cx } from 'emotion';

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

  const portfolioStyles = css`
    padding: 20px;
    text-align: center;

    h1 {
      font-size: 2em;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      button {
        padding: 10px 20px;
        background-color: lightgray;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        &:hover {
          background-color: gray;
        }
      }
    }
  `;

  return (
    <div className={portfolioStyles}>
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
