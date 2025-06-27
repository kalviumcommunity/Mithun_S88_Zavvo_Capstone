import React from 'react';

const ProductCard = ({ title, imageUrl, price }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '12px' }}>
      <img src={imageUrl} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <p>₹{price}</p>
    </div>
  );
};

export default ProductCard;
