import React from 'react';
import CustomerReview from './CustomerReview';
import Mobiles from './Product/Mobiles';

const OurProducts = () => {
  return (
    <div className="mx-20 mt-10">
      <h1 className="my-10 text-4xl font-semibold text-center">Our Products</h1>
      <div className="flex gap-20">
        <div>
          <CustomerReview />
        </div>
        <div className=" w-full">
          <Mobiles />
        </div>
      </div>
      <h1>Products</h1>
    </div>
  );
};

export default OurProducts;
