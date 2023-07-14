import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../CSS/ImageStyle.css';
import '../../../../CSS/Product.css';

const Product = ({ product, setSearchOpen }) => {
  const navigator = useNavigate();
  const handleBuy = id => {
    navigator(`/buy/${id}`);
    setSearchOpen(false);
  };
  return (
    <div className="card w-60 glass shadow-xl hover:shadow-2xl hover:shadow-blue-800 cursor-pointer">
      <figure>
        <img
          className=" pic-style h-44  cursor-pointer"
          src={product?.img}
          alt="product"
        />
      </figure>
      <div className="card-body ">
        <h1 className="text-center">{product?.name}</h1>
        <h2 className=" text-center text-xl font-bold">{product?.price} BDT</h2>

        <div className=" flex  justify-center items-center gap-1">
          {product?.quantity > 0 ? (
            <button
              onClick={() => handleBuy(product?._id)}
              className="px-4 py-2 rounded-lg bg-neutral text-white hover:btn-primary mt-2 uppercase"
            >
              buy it now
            </button>
          ) : (
            <h1 className="text-red-600 text-xl  font-bold mt-3">
              {' '}
              Out Of Stock
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
