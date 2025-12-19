import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

// ProductCard - ensures Buy button adds to cart and requests mobile menu to close
export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext || {});

  const handleBuy = (e) => {
    e.preventDefault();
    if (addToCart) {
      addToCart({ ...product, quantity: 1 });
    }
    // Ask any listening header/mobile menu to close
    try {
      window.dispatchEvent(new Event('closeMobileMenu'));
    } catch (err) {
      // ignore in environments where dispatching isn't available
    }
  };

  return (
    <article className="product-card">
      <Link to={`/product/${product?.id}`} className="product-link">
        <img src={product?.image} alt={product?.title} />
        <h3>{product?.title}</h3>
      </Link>
      <div className="product-meta">
        <span className="price">${product?.price}</span>
        <button className="buy-button" onClick={handleBuy}>Buy</button>
      </div>
    </article>
  );
}
