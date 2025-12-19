import React from 'react';
import useTheme from '../hooks/useTheme';

const Header = ({ title = 'Busy Bee Crochet' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>{title}</h1>
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

export default Header;
