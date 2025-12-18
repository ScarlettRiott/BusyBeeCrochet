import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatCurrency } from '../utils/format';

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId) || products[0];
  const { addItem, undoLast } = useCart();
  const { addToast } = useToast ? useToast() : { addToast: () => {} };
  const [qty, setQty] = useState(1);
  const [pulsing, setPulsing] = useState(false);

  function handleAdd() {
    const actionId = addItem(product.id, qty);
    setPulsing(true);
    setTimeout(()=>setPulsing(false),650);
    try {
      addToast && addToast({
        title: 'Added to cart',
        message: `${qty} × ${product.title}`,
        type: 'success',
        duration: 4500,
        undo: () => { if (actionId) undoLast(actionId); }
      });
    } catch {}
  }

  return (
    <div className="container">
      <div className="product-detail">
        <div><img src={product.image} alt={product.title} style={{borderRadius:12}}/></div>
        <div>
          <h2>{product.title}</h2>
          <p style={{color:'var(--muted)'}}>{product.short}</p>
          <p><strong>{formatCurrency(product.price, product.currency)}</strong></p>
          <p>{product.description}</p>
          <div style={{display:'flex', gap:8, alignItems:'center', marginTop:12}}>
            <label>Qty:
              <select value={qty} onChange={(e)=>setQty(parseInt(e.target.value,10))} style={{marginLeft:8}}>
                {Array.from({length:10},(_,i)=>i+1).map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </label>
            <button className={`btn btn-primary add-pulse ${pulsing ? 'pulse' : ''}`} onClick={handleAdd}>Add to Cart</button>
            <Link to="/cart" className="btn btn-outline">Go to Cart</Link>
          </div>
          <div style={{marginTop:18}}><small>SKU: {product.sku}</small></div>
        </div>
      </div>
    </div>
  );
}
