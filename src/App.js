import './components/Desserts/Desserts'
import './App.css';
import Desserts from './components/Desserts/Desserts';
import data from './data/data.json'

function App() {
  return (
    
    <div className="App">
     
      <Desserts data = {data}/>
    </div>
  );
}

export default App;
