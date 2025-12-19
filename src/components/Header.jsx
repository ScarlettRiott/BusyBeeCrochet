import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useTheme, useCart } from '../hooks';

export default function Header({ siteTitle = 'Busy Bee Crochet' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { totalItems = 0, openCart } = useCart();

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    if (setTheme) setTheme(next);
  };

  const handleNavClick = () => {
    // close the mobile menu when navigating
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <a href="/" onClick={handleNavClick} aria-label={siteTitle}>
            {siteTitle}
          </a>
        </div>

        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`} aria-label="Main navigation">
          <a href="/" onClick={handleNavClick}>Home</a>
          <a href="/shop" onClick={handleNavClick}>Shop</a>
          <a href="/about" onClick={handleNavClick}>About</a>
          <a href="/contact" onClick={handleNavClick}>Contact</a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            aria-pressed={theme === 'dark'}
            onClick={toggleTheme}
            title="Toggle theme"
            className="btn-theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          <button
            type="button"
            onClick={() => openCart && openCart()}
            title="Open cart"
            className="btn-cart"
          >
            🛒
            <span className="cart-count" aria-hidden={totalItems === 0}>{totalItems}</span>
            <span className="sr-only">Open shopping cart ({totalItems} items)</span>
          </button>

          <button
            className="btn-mobile-toggle"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(prev => !prev)}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};
