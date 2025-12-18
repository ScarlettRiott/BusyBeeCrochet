import React from 'react';

/* Small Bee SVG used across the site */
export default function Bee({ className = '', size = 36 }) {
  return (
    <svg className={`bee ${className}`} width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <g transform="translate(4,10)">
        <ellipse cx="28" cy="18" rx="14" ry="10" fill="#FFD54A" />
        <path d="M16 12c3 1.5 6 1.5 9 0" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M14 20c3 1.5 9 1.5 12 0" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="40" cy="10" r="2.2" fill="#000" />
        <g className="wing-left"><ellipse cx="6" cy="2" rx="6" ry="10" fill="#fff" opacity="0.9" /></g>
        <g className="wing-right"><ellipse cx="34" cy="2" rx="6" ry="10" fill="#fff" opacity="0.9" /></g>
      </g>
    </svg>
  );
}
