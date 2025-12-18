/*
  Basic focus trap hook (used by the mobile menu).
  For the bundled project this file exists for completeness.
*/
import { useEffect } from 'react';

function getFocusable(container) {
  if (!container) return [];
  const selectors = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled])',
    'select:not([disabled])', 'textarea:not([disabled])', '[tabindex]:not([tabindex="-1"])'
  ];
  return Array.from(container.querySelectorAll(selectors.join(','))).filter(el => el.offsetParent !== null);
}

export default function useFocusTrap(containerRef, active, options = {}) {
  const { onClose, initialFocusRef, returnFocusRef } = options;
  useEffect(() => {
    if (!active || !containerRef?.current) return;
    const container = containerRef.current;
    const focusable = getFocusable(container);
    const first = initialFocusRef?.current || focusable[0];
    const last = focusable[focusable.length - 1];

    try { (first || container).focus(); } catch(e) {}

    function onKey(e) {
      if (e.key === 'Tab') {
        const cur = document.activeElement;
        if (e.shiftKey) {
          if (cur === first) { e.preventDefault(); (last || first).focus(); }
        } else {
          if (cur === last) { e.preventDefault(); (first || last).focus(); }
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (typeof onClose === 'function') onClose();
      }
    }

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      try { if (returnFocusRef?.current) returnFocusRef.current.focus(); } catch(e) {}
    };
  }, [active, containerRef, initialFocusRef, returnFocusRef, onClose]);
}
