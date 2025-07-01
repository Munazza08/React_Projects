import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Wrapper from './Components/Wrapper';
import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
import SearchItem from './Components/SearchItem';
import Cart from './Components/Cart';
import Collections from './Components/Collections';
import { items } from './Components/data';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Router>
        <Navbar cart={cart}/>
        <Routes>
          {/* Define routes with specific content */}
          <Route path="/" element={
            <>
              <Hero />
              <Collections />
              <Wrapper setData={setData}/>
              <Product cart={cart} setCart={setCart} items={data} />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search/:term" element={<SearchItem />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
