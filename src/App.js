import './components/Desserts/Desserts'
import './App.css';
import Desserts from './components/Desserts/Desserts';
import data from './data/data.json'
import { CartProvider } from './data/CartContext';

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Desserts data = {data}/>
    </div>
    </CartProvider>
  );
}

export default App;
