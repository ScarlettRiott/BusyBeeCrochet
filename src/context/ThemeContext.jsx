/*
  Theme provider (persists theme to localStorage and applies data-theme on <html>)
*/
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();
export function useTheme() { return useContext(ThemeContext); }
const STORAGE_KEY = 'bb_theme_v1';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEY); if (s === 'light' || s === 'dark') return s; } catch {}
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch {}
  }, [theme]);

  function toggleTheme() { setTheme((t) => (t === 'dark' ? 'light' : 'dark')); }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
