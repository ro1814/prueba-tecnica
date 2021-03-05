import InventoryList from './components/inventory.list.js'
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import SearchPage from './components/SearchPage.js';


function App() {
  return (
    <div className="App">
      <SearchPage/>
      <InventoryList/>
    </div>
  );
}

export default App;
