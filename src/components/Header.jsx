import React from 'react';
import '../styles.css';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + (i.qty || 0), 0);

  return (
    <header className="container header" role="banner">
      <a href="/" className="brand" aria-label="Busy Bee Crochet home">
        <div className="logo" aria-hidden>BB</div>
        <div>
          <div style={{ fontWeight: 700 }}>Busy Bee</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Handmade crochet</div>
        </div>
      </a>

      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div id="main-nav" style={{ display: 'flex', gap: 12 }}>
          <a href="/" aria-current="page">Home</a>
          <a href="/products">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <a href="/cart" className="cart-btn" aria-label="View cart">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" stroke="#1b1b1b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="20" r="1" fill="#1b1b1b" />
            <circle cx="18" cy="20" r="1" fill="#1b1b1b" />
          </svg>
          <span className="cart-count" aria-hidden>{count}</span>
        </a>
      </nav>
    </header>
  );
}
