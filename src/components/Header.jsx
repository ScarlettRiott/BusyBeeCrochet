import React from 'react';

export default function Header() {
  const openExternal = (url) => () => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div className="brand">
          <a href="/" className="brand-link">
            <h1 className="site-title">Busy Bee Crochet</h1>
          </a>
        </div>

        <nav className="main-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            <li><a className="nav-link" href="/shop">Shop</a></li>
            <li><a className="nav-link" href="/about">About</a></li>
            <li><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          {/* Social links converted to accessible buttons */}
          <button
            type="button"
            className="link-ghost"
            aria-label="Open Instagram"
            onClick={openExternal('https://instagram.com/yourprofile')}
          >
            Instagram
          </button>

          <button
            type="button"
            className="link-ghost"
            aria-label="Open Etsy"
            onClick={openExternal('https://etsy.com/shop/yourshop')}
          >
            Etsy
          </button>

          <a href="/cart" className="link-btn" aria-label="Cart">Cart</a>
        </div>
      </div>
    </header>
  );
}
