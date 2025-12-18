import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import { formatCurrency } from '../utils/format';

export default function CartPage() {
  const { items, clearCart, getSubtotal } = useCart();
  const navigate = useNavigate();

  if (!items || items.length === 0) {
    return <div className="container"><h2>Your cart is empty</h2><p><Link to="/">Continue shopping</Link></p></div>;
  }

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <div style={{display:'grid',gap:8}}>
        {items.map((it,i)=> {
          const prod = products.find(p=>p.id===it.productId) || {};
          return (
            <div key={i} style={{display:'flex',gap:8,alignItems:'center',padding:8,background:'var(--card)',borderRadius:8}}>
              <img src={it.image||prod.thumbnail||prod.image} alt={it.title} style={{width:80,height:80,objectFit:'cover',borderRadius:8}} />
              <div style={{flex:1}}>
                <div style={{fontWeight:700}}>{it.title}</div>
                <div style={{color:'var(--muted)'}}>{prod.short}</div>
                <div style={{marginTop:6}}>Qty: {it.qty}</div>
              </div>
              <div style={{textAlign:'right'}}>{formatCurrency(it.price * it.qty)}</div>
            </div>
          );
        })}
      </div>
      <div style={{marginTop:16, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div><button className="btn btn-outline" onClick={() => { if (confirm('Clear cart?')) clearCart(); }}>Clear Cart</button></div>
        <div>
          <strong>Subtotal: {formatCurrency(getSubtotal())}</strong>
          <div style={{marginTop:8}}>
            <button className="btn btn-primary" onClick={() => navigate('/checkout')} style={{marginRight:8}}>Checkout</button>
            <Link to="/" className="btn btn-outline">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
