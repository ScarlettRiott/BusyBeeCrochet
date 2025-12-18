import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const { pathname } = useLocation();
  const items = [
    { to: '/', label: 'Home', emoji: '🏠' },
    { to: '/#products', label: 'Shop', emoji: '🛍️' },
    { to: '/cart', label: 'Cart', emoji: '🐝' },
    { to: '/#contact', label: 'Contact', emoji: '✉️' }
  ];
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Mobile">
      {items.map(it => {
        const active = pathname === it.to || (it.to !== '/' && pathname.startsWith(it.to.replace('#','')));
        return (
          <Link key={it.to} to={it.to} className={`bottom-nav-item ${active ? 'active' : ''}`}>
            <div className="bottom-nav-emoji">{it.emoji}</div>
            <div className="bottom-nav-label">{it.label}</div>
          </Link>
        );
      })}
    </nav>
  );
}
