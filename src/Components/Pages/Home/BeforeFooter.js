import React from 'react';
import car from '../../../Images/Background/car 1.gif';
import sCart from '../../../Images/Background/giphy.gif';
import like from '../../../Images/Background/like.png';

const BeforeFooter = () => {
  return (
    <div className="mx-20 pb-10">
      <div className="mx-20 mt-8">
        <h1 className="font-semibold text-xl mb-3">Electronics :</h1>
        <p>
          If you're considering a new laptop, looking for a powerful new car
          stereo or shopping for a new HDTV, we make it easy to find exactly
          what you need at a price you can afford. We offer Every Day Low Prices
          on TVs, laptops, cell phones, tablets and iPads, video games, desktop
          computers, cameras and camcorders, audio, video and more.
        </p>
      </div>
      <div className="flex  gap-32 pt-3 ml-20 mt-10">
        <div className="flex items-center">
          <img className="h-16" src={sCart} alt="" />
          <div>
            <h1 className="text-xl font-bold">Free Shipping</h1>
            <p>on orders over $100</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-16 mr-3" src={car} alt="" />
          <div>
            <h1 className="text-xl font-bold">Fast Delivery</h1>
            <p>World Wide</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-14 mr-3" src={like} alt="" />
          <div>
            <h1 className="text-xl font-bold">Big Choice</h1>
            <p>of Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
