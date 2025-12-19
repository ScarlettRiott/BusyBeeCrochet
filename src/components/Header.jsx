import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

// Header component - restores ThemeContext usage, mobile nav behavior and external links
export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext || {});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Close the mobile menu when a global event is fired (allows other components like ProductCard to request it)
  useEffect(() => {
    const handleClose = () => setIsMenuOpen(false);
    window.addEventListener('closeMobileMenu', handleClose);
    return () => window.removeEventListener('closeMobileMenu', handleClose);
  }, []);

  const handleNavClick = (to) => (e) => {
    // If it's a regular internal navigation, close menu and navigate
    setIsMenuOpen(false);
    if (to) {
      navigate(to);
    }
  };

  return (
    <header className={`site-header ${theme || ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={handleNavClick('/')}>Busy Bee Crochet</Link>

        <button
          className="mobile-menu-toggle"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <button className="nav-link" onClick={handleNavClick('/')}>Home</button>
            </li>
            <li>
              <button className="nav-link" onClick={handleNavClick('/shop')}>Shop</button>
            </li>
            <li>
              <button className="nav-link" onClick={handleNavClick('/about')}>About</button>
            </li>
            <li>
              <button className="nav-link" onClick={handleNavClick('/contact')}>Contact</button>
            </li>
            <li>
              {/* External link - opens in new tab */}
              <a
                href="https://www.etsy.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="nav-link"
              >
                Etsy
              </a>
            </li>
            <li>
              <button className="theme-toggle" onClick={() => { toggleTheme && toggleTheme(); setIsMenuOpen(false); }}>
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
