import React from 'react';
import car from '../../../Images/Background/car 1.gif';
import sCart from '../../../Images/Background/giphy.gif';
import like from '../../../Images/Background/like.png';

const BeforeFooter = () => {
  return (
    <div className="mx-20">
      <div className="flex  gap-32 pt-3">
        <div className="flex items-center">
          <img className="h-20" src={sCart} alt="" />
          <div>
            <h1 className="text-2xl font-bold">Free Shipping</h1>
            <p>on orders over $100</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-20 mr-3" src={car} alt="" />
          <div>
            <h1 className="text-2xl font-bold">Fast Delivery</h1>
            <p>World Wide</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-20 mr-3" src={like} alt="" />
          <div>
            <h1 className="text-2xl font-bold">Big Choice</h1>
            <p>of Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
