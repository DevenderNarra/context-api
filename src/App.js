import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
