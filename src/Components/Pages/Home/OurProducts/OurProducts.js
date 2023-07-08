import React from 'react';
import CustomerReview from './CustomerReview';

const OurProducts = () => {
  return (
    <div className="mx-20 mt-10">
      <h1 className="my-5 text-5xl font-bold text-center">Our Products</h1>
      <div className="flex gap-20">
        <div>
          <CustomerReview />
        </div>
        <div className="bg-red-500 w-full">
          <h1>Product 2</h1>
        </div>
      </div>
      <h1>Products</h1>
    </div>
  );
};

export default OurProducts;
