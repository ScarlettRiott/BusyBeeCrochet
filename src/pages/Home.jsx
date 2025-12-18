import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import Bee from '../components/Bee';

export default function Home() {
  return (
    <div>
      <section className="hero container">
        <div className="hero-copy">
          <h1>Handmade with Love — Busy Bee Crochet</h1>
          <p className="tag">Unique amigurumi, cozy home goods, and custom orders — crafted stitch by stitch.</p>
          <p>
            <Link className="btn btn-primary" to="/#products">Shop Bestsellers</Link>
            <Link className="btn btn-outline" to="/#contact" style={{marginLeft:8}}>Request a Custom Order</Link>
          </p>
        </div>
        <div className="hero-media">
          <img src="/assets/hero-placeholder.svg" alt="Assortment of crochet items" style={{width:'100%', borderRadius:12}} />
        </div>
        <Bee className="bee-fly-hero" size={48} />
        <Bee className="bee-static" size={36} />
      </section>

      <section className="container" aria-labelledby="products">
        <h2 id="products">Shop Bestsellers</h2>
        <p style={{color:'var(--muted)'}}>Small-batch favorites — perfect for gifts and home decor.</p>
        <div className="grid products-grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <p style={{marginTop:12}}><Link to="/cart" className="btn btn-outline">View Cart</Link></p>
      </section>
    </div>
  );
}
