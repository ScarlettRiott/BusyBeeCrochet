import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useContext(ThemeContext || {});

  const handleInternalClick = (e) => {
    // Close mobile menu if present
    try {
      window.dispatchEvent(new Event('closeMobileMenu'));
    } catch (err) {}
  };

  return (
    <footer className={`site-footer ${theme || ''}`}>
      <div className="container footer-inner">
        <div className="footer-links">
          <Link to="/" onClick={handleInternalClick}>Home</Link>
          <Link to="/shop" onClick={handleInternalClick}>Shop</Link>
          <Link to="/about" onClick={handleInternalClick}>About</Link>
        </div>

        <div className="social-links">
          <a href="https://www.etsy.com/" target="_blank" rel="noopener noreferrer">Etsy</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <div className="copyright">© {new Date().getFullYear()} Busy Bee Crochet</div>
      </div>
    </footer>
  );
}
