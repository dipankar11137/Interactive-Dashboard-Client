import React from 'react';

const Product = () => {
  return (
    <div className="card w-72 glass">
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
          <button className="btn btn-neutral text-white hover:btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
