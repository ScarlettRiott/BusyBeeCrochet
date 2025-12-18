/*
  Cart provider (simplified): stores items in localStorage, supports addItem that returns actionId,
  and undoLast(actionId). This is a concise version for the generated project.
*/
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import products from '../data/products';

const CartContext = createContext();
export function useCart() { return useContext(CartContext); }
const STORAGE_KEY = 'bbcrochet_cart_v1';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : []; } catch { return []; }
  });
  const actionIdRef = useRef(1);
  const actionsRef = useRef({});

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }, [items]);

  function optionsEqual(a = {}, b = {}) { try { return JSON.stringify(a) === JSON.stringify(b); } catch { return false; } }

  function addItem(productId, qty = 1, options = {}) {
    const product = products.find((p) => p.id === productId);
    if (!product) return null;
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.productId === productId && optionsEqual(i.options, options));
      if (idx !== -1) {
        const copy = prev.slice();
        copy[idx] = { ...copy[idx], qty: Math.min(99, copy[idx].qty + qty) };
        return copy;
      }
      return [...prev, { productId, qty, options, price: product.price, title: product.title, image: product.thumbnail || product.image }];
    });
    const actionId = actionIdRef.current++;
    actionsRef.current[actionId] = { productId, qty, options };
    return actionId;
  }

  function undoLast(actionId) {
    const action = actionsRef.current[actionId];
    if (!action) return false;
    const { productId, qty: undoQty, options } = action;
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.productId === productId && optionsEqual(i.options, options));
      if (idx === -1) return prev;
      const item = prev[idx];
      const newQty = item.qty - undoQty;
      if (newQty > 0) {
        const copy = prev.slice(); copy[idx] = { ...item, qty: newQty }; return copy;
      }
      return prev.filter((_, i) => i !== idx);
    });
    delete actionsRef.current[actionId];
    return true;
  }

  function clearCart() { setItems([]); actionsRef.current = {}; }
  function getSubtotal() { return items.reduce((s, i) => s + i.price * i.qty, 0); }

  return <CartContext.Provider value={{ items, addItem, undoLast, clearCart, getSubtotal }}>{children}</CartContext.Provider>;
}
