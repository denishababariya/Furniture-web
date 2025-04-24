import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div className="container mt-4">
      <h2>Product Details for ID: {id}</h2>
      {/* Fetch and show product data here */}
    </div>
  );
};

export default ProductDetail;
