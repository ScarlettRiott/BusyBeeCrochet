/*
  Top-level router and layout. Contains the header, routes, and footer.
  Routes:
  - /         Home
  - /product/:productId  Product detail
  - /cart     Cart
  - /checkout Checkout
*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="app">
      <Header />
      <main id="main" className="container main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <BottomNav />

      <Footer />
    </div>
  );
}

export default App;
