import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';

export default function Checkout(){
  return (
    <div>
      <Header />
      <main className="container" role="main">
        <h1>Checkout</h1>
        <form onSubmit={(e)=>{e.preventDefault();alert('This demo does not process payments.')}} style={{display:'grid',gap:12,maxWidth:680}}>
          <fieldset style={{border:'1px solid #f0f0f0',padding:12,borderRadius:8}}>
            <legend style={{fontWeight:700}}>Shipping</legend>
            <label htmlFor="fullName">Full name</label>
            <input id="fullName" name="fullName" required style={{padding:10,borderRadius:8,border:'1px solid #eee'}} />

            <label htmlFor="address">Address</label>
            <input id="address" name="address" required style={{padding:10,borderRadius:8,border:'1px solid #eee'}} />

            <label htmlFor="city">City</label>
            <input id="city" name="city" required style={{padding:10,borderRadius:8,border:'1px solid #eee'}} />

            <label htmlFor="zip">ZIP / Postal code</label>
            <input id="zip" name="zip" required style={{padding:10,borderRadius:8,border:'1px solid #eee'}} />
          </fieldset>

          <fieldset style={{border:'1px solid #f0f0f0',padding:12,borderRadius:8}}>
            <legend style={{fontWeight:700}}>Payment</legend>
            <label htmlFor="card">Card number</label>
            <input id="card" name="card" inputMode="numeric" required placeholder="4242 4242 4242 4242" style={{padding:10,borderRadius:8,border:'1px solid #eee'}} />

            <div style={{display:'flex',gap:8}}>
              <div style={{flex:1}}>
                <label htmlFor="exp">Exp</label>
                <input id="exp" name="exp" placeholder="MM/YY" required style={{padding:10,borderRadius:8,border:'1px solid #eee'}} />
              </div>
              <div style={{flex:1}}>
                <label htmlFor="cvc">CVC</label>
                <input id="cvc" name="cvc" inputMode="numeric" required style={{padding:10,borderRadius:8,border:'1px solid #eee'}} />
              </div>
            </div>
          </fieldset>

          <div style={{display:'flex',gap:8}}>
            <button className="btn" type="submit">Complete order</button>
            <a href="/cart" className="btn secondary">Back to cart</a>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
