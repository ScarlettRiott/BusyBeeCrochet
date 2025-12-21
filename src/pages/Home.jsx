import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import products from '../data/products';
import '../styles.css';

export default function Home(){
  return (
    <div>
      <Header />
      <main className="container" role="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-card">
            <div style={{flex:1}}>
              <h1 id="hero-heading">Polished crochet for everyday moments</h1>
              <p>Thoughtfully made, ready to love. Explore small-batch hats, toys, and home pieces crafted with sustainable yarns.</p>
              <p><a href="/products" className="btn">Shop new arrivals</a></p>
            </div>
            <img src="/assets/hero-placeholder.svg" alt="Assorted crochet pieces" />
          </div>
        </section>

        <section aria-labelledby="featured-heading" style={{marginTop:20}}>
          <h2 id="featured-heading">Featured products</h2>
          <div className="products-grid" role="list">
            {products.map(p=> (
              <div role="listitem" key={p.id}><ProductCard product={p} /></div>
            ))}
          </div>
        </section>

        <section style={{marginTop:20}} aria-labelledby="about-heading">
          <h2 id="about-heading">About our shop</h2>
          <div className="card-grid" style={{marginTop:12}}>
            <div className="product-card">
              <div style={{fontWeight:700}}>Sustainable materials</div>
              <div style={{color:'var(--muted)'}}>We choose durable, low-impact yarns to make pieces that last.</div>
            </div>
            <div className="product-card">
              <div style={{fontWeight:700}}>Ethical small-batch</div>
              <div style={{color:'var(--muted)'}}>Handmade in limited runs to reduce waste and keep quality high.</div>
            </div>
            <div className="product-card">
              <div style={{fontWeight:700}}>Local pickup</div>
              <div style={{color:'var(--muted)'}}>Pick up or ship — flexible options at checkout.</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
