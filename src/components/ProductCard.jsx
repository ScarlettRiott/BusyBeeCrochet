import React from 'react';
import { Link } from 'react-router-dom';
import Bee from './Bee';
import { formatCurrency } from '../utils/format';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function ProductCard({ product }) {
  const { addItem, undoLast } = useCart();
  const { addToast } = useToast();

  async function handleAddToCart(e) {
    e.preventDefault();
    const actionId = addItem(product.id, 1);
    if (actionId == null) {
      addToast({ title: 'Error', message: 'Unable to add to cart', type: 'error' });
      return;
    }
    // show toast with undo
    addToast({
      title: 'Added to cart',
      message: product.name,
      type: 'success',
      duration: 5000,
      undo: () => undoLast(actionId),
    });
  }

  return (
    <article className="product-card" aria-labelledby={`title-${product.id}`}>
      <img src={product.image} alt="" aria-hidden="true" />
      <div className="product-info">
        <h3 id={`title-${product.id}`} className="product-title">{product.name}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
          <div>
            <div className="product-price">{formatCurrency(product.price)}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</div>
          </div>
          <div>
            <a className="btn" href={`/product/${product.slug}`} aria-label={`View ${product.name}`} style={{ marginRight: 8 }}>View</a>
            <button className="btn secondary" onClick={handleAddToCart} disabled={product.stock <= 0}>Add</button>
          </div>
        </div>
      </div>
    </article>
  );
}
