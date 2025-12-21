import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';

export default function Cart(){
  return (
    <div>
      <Header />
      <main className="container" role="main">
        <h1>Your cart</h1>
        <p style={{color:'var(--muted)'}}>Cart persistence is not implemented in this static demo. Items added during a session should be stored in local state.</p>

        <div style={{display:'grid',gap:12,marginTop:12}}>
          <div className="product-card">
            <img src="/assets/beanie.svg" alt="Beanie" />
            <div className="product-info">
              <h3 className="product-title">Cuddly Alpine Beanie</h3>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{color:'var(--muted)'}}>$28.00</div>
                <div><label className="visually-hidden">Quantity</label><input type="number" min="1" defaultValue="1" style={{width:64,padding:8,borderRadius:8,border:'1px solid #eee'}}/></div>
              </div>
            </div>
          </div>

          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{fontWeight:700}}>Subtotal</div>
            <div style={{fontWeight:700}}>$28.00</div>
          </div>

          <div style={{display:'flex',gap:12}}>
            <a href="/checkout" className="btn">Proceed to checkout</a>
            <a href="/products" className="btn secondary">Continue shopping</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
