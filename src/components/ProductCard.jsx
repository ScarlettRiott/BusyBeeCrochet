import React from 'react';
import { Link } from 'react-router-dom';
import Bee from './Bee';
import { formatCurrency } from '../utils/format';

export default function ProductCard({ product }) {
  return (
    <article className="card product-card-animated">
      <div className="card-media">
        <img src={product.image} alt={product.title} />
        <span className="bee-mini"><Bee size={28} /></span>
      </div>
      <div className="card-body">
        <h3>{product.title}</h3>
        <div style={{color:'var(--muted)'}}>{product.short}</div>
        <div style={{marginTop:'auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <strong>{formatCurrency(product.price, product.currency)}</strong>
          <div>
            <Link className="btn btn-outline" to={`/product/${product.id}`} style={{marginRight:8}}>View</Link>
            <Link className="btn btn-primary" to={`/product/${product.id}`}>Buy</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
