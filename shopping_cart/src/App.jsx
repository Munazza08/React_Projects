import React from 'react'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App
