// ProductsCard.jsx
import React from 'react';

function ProductsCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
    </div>
  );
}

export default ProductsCard;
