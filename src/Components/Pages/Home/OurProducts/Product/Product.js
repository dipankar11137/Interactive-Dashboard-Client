import React from 'react';
import '../../../../CSS/Product.css';

const Product = () => {
  return (
    <div className="card w-60 glass">
      <figure>
        <img
          className="h-44 "
          src="https://www.pngmart.com/files/22/iPhone-14-PNG-Transparent.png"
          alt="product"
        />
      </figure>
      <div className="card-body ">
        <h1 className="text-center">Life hack</h1>
        <h2 className=" text-center text-xl font-bold">160000 BDT</h2>

        <div className="card-actions justify-center">
          <button className="px-4 py-2 rounded-lg bg-neutral text-white hover:btn-primary mt-2 uppercase">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
