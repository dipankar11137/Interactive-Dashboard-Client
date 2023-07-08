import React from 'react';
import CustomerReview from './CustomerReview';

const OurProducts = () => {
  return (
    <div className="mx-20 mt-10">
      <div className="flex gap-20">
        <div>
          <CustomerReview />
        </div>
        <div className="bg-red-500 w-full">
          <h1>Product</h1>
        </div>
      </div>
      <h1>Products</h1>
    </div>
  );
};

export default OurProducts;
