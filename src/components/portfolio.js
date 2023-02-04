import React, { useState } from 'react';

function StockTable() {
  const [stocks, setStocks] = useState([]);
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [buySell, setBuySell] = useState('Buy');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStocks([...stocks, { symbol, quantity, price, buySell }]);
    setSymbol('');
    setQuantity(0);
    setPrice(0);
    setBuySell('Buy');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Stock symbol"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <select value={buySell} onChange={(e) => setBuySell(e.target.value)}>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
        <button type="submit">Add stock</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Buy/Sell</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>{stock.quantity}</td>
              <td>{stock.price}</td>
              <td>{stock.buySell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockTable;
