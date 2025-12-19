import React from 'react';
import useCart from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product);
  };

  return (
    <article className="product-card">
      {product?.image && (
        <img src={product.image} alt={product.name || 'product image'} />
      )}
      <div className="product-card__body">
        <h3>{product?.name}</h3>
        {product?.price && <p className="product-card__price">{product.price}</p>}
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </article>
  );
};

export default ProductCard;
