import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Bee from './Bee';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import useFocusTrap from '../hooks/useFocusTrap';

export default function Header() {
  const { items } = useCart();
  const count = items.reduce((s,i) => s + i.qty, 0);
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const firstRef = useRef(null);

  useFocusTrap(menuRef, open, { onClose: () => setOpen(false), initialFocusRef: firstRef, returnFocusRef: buttonRef });

  return (
    <header className="header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="container header-inner">
        <Link to="/" className="brand"><Bee size={38} /><span>Busy Bee Crochet</span></Link>
        <nav className="nav-desktop" aria-label="Primary">
          <Link to="/">Home</Link>
          <Link to="/#products">Shop</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-pressed={theme==='dark'}>{theme==='dark' ? '🌞' : '🌙'}</button>
          <Link to="/cart" className="cart-btn">🐝 Cart ({count})</Link>
          <button ref={buttonRef} className="nav-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(s=>!s)}>
            <span className={`hamburger ${open ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={menuRef} className={`mobile-nav ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-nav-inner">
          <nav className="mobile-nav-links">
            <Link ref={firstRef} to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/#products" onClick={() => setOpen(false)}>Shop</Link>
            <Link to="/#contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/cart" onClick={() => setOpen(false)}>Cart ({count})</Link>
            <button className="theme-toggle mobile-theme" onClick={() => toggleTheme()}>{theme==='dark' ? '🌞 Light' : '🌙 Dark'}</button>
          </nav>
          <div className="mobile-nav-footer">
            <a href="mailto:busybeecrochet@example.com">Email</a>
            <a href="#">Instagram</a>
            <a href="#">Etsy</a>
          </div>
        </div>
        <button className="mobile-nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      </div>
    </header>
  );
}
