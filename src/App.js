import './App.css';
import Portfolio from './components/portfolio';
import StockTable from './components/stockTable';

function App() {
  return (
    <div className="App">
     <Portfolio/>
     <StockTable stock="AAPL" />
    </div>
  );
}

export default App;
