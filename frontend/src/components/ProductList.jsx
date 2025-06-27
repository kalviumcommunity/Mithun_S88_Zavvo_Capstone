import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  { title: 'Sneakers', imageUrl: 'https://via.placeholder.com/150', price: 1299 },
  { title: 'Backpack', imageUrl: 'https://via.placeholder.com/150', price: 899 },
];

const ProductList = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {sampleProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
