import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from '../data/products';
import '../styles.css';

export default function Product({match, params}){
  // Some routers pass params; fallback to reading window.location
  const slug = (params && params.slug) || (match && match.params && match.params.slug) || window.location.pathname.split('/').pop();
  const product = products.find(p=>p.slug===slug);
  if(!product){
    return (
      <div>
        <Header />
        <main className="container"><h2>Product not found</h2></main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container" role="main">
        <article style={{display:'grid',gridTemplateColumns:'1fr',gap:16}}>
          <div style={{display:'flex',gap:16,alignItems:'start'}}>
            <img src={product.image} alt={product.name} style={{width:220,height:220,objectFit:'contain',borderRadius:12}}/>
            <div>
              <h1>{product.name}</h1>
              <p style={{color:'var(--muted)'}}>{product.description}</p>
              <div style={{margin:'12px 0'}}>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <div style={{color:'var(--muted)'}}>{product.stock>0?`${product.stock} available`:'Out of stock'}</div>
              </div>
              <button className="btn" aria-label={`Add ${product.name} to cart`}>Add to cart</button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
