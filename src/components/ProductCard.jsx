import React from 'react';

export default function ProductCard({product}){
  return (
    <article className="product-card" aria-labelledby={`title-${product.id}`}>
      <img src={product.image} alt="" aria-hidden="true" />
      <div className="product-info">
        <h3 id={`title-${product.id}`} className="product-title">{product.name}</h3>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:8}}>
          <div>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <div style={{color:'var(--muted)',fontSize:'0.95rem'}}>{product.stock>0?`${product.stock} in stock`:'Out of stock'}</div>
          </div>
          <div>
            <a className="btn" href={`/product/${product.slug}`} aria-label={`View ${product.name}`}>View</a>
          </div>
        </div>
      </div>
    </article>
  );
}
