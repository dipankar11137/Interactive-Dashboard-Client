import React from 'react';
import CustomerReview from './CustomerReview';
import ExcitingDeals from './Product/ExcitingDeals';
import Mobiles from './Product/Mobiles';
import NewProducts from './Product/NewProducts';
import Tv from './Product/Tv';

const OurProducts = () => {
  return (
    <div className="mx-20 mt-10 mb-28">
      <h1 className="my-10 text-4xl text-center">
        Our <span className=" font-semibold">New Products</span>
      </h1>
      <div className="flex gap-20">
        <div>
          <CustomerReview />
        </div>
        <div className=" w-full">
          <NewProducts />
          <Mobiles />
          <ExcitingDeals />
          <Tv />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
