import React from 'react';

const ProductDetail = ({ title, imageUrl, price, description }) => {
  return (
    <div style={{ padding: '2rem' }}>
      <img src={imageUrl} alt={title} style={{ width: '300px' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>Price: ₹{price}</h4>
    </div>
  );
};

export default ProductDetail;
