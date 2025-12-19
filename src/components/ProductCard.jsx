import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../hooks';

export default function ProductCard({ product }) {
  const { addItem, openCart } = useCart();

  const handleBuy = async (e) => {
    e.preventDefault();
    if (!product) return;

    try {
      // add one of this product to the cart
      if (addItem) {
        // a common cart API expects {id, title, price, quantity, image}
        await addItem({
          id: product.id ?? product.sku ?? product.handle,
          title: product.title || product.name,
          price: product.price || product.price_cents || 0,
          quantity: 1,
          image: product.image,
          product,
        });
      }

      // optionally open the cart so user sees the result
      if (openCart) openCart();
    } catch (err) {
      // swallow errors here but you might want to report them
      // eslint-disable-next-line no-console
      console.error('Failed to add item to cart', err);
    }
  };

  return (
    <article className="product-card">
      {product.image && (
        <a href={`/product/${product.handle || product.id}`} className="product-image">
          <img src={product.image} alt={product.title || product.name} />
        </a>
      )}

      <div className="product-body">
        <h3 className="product-title">{product.title || product.name}</h3>
        {product.price != null && <div className="product-price">${(product.price / 100).toFixed(2)}</div>}
        {product.description && <p className="product-description">{product.description}</p>}

        <div className="product-actions">
          <button className="btn-buy" onClick={handleBuy} aria-label={`Buy ${product.title || product.name}`}>
            Buy
          </button>

          <a className="btn-details" href={`/product/${product.handle || product.id}`} onClick={() => { /* no-op; link will navigate */ }}>
            Details
          </a>
        </div>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handle: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
