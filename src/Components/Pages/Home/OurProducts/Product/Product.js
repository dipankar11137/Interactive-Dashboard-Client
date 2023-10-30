import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../../firebase.init';
import '../../../../CSS/ImageStyle.css';
import '../../../../CSS/Product.css';

const Product = ({ product, setSearchOpen }) => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigator = useNavigate();
  const handleBuy = id => {
    navigator(`/buy/${id}`);
    setSearchOpen(false);
  };
  const handleCart = id => {
    const carts = { id, email };

    const url = `https://interective-dashboard-server.onrender.com/cartProducts/cartProducts`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(carts),
    })
      .then(res => res.json())
      .then(result => {
        toast.success('Successfully cart This cart');
        //    reset();
      });
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
            <div className="items-center">
              {' '}
              <button
                onClick={() => handleBuy(product?._id)}
                className="px-4  w-full py-2 rounded-lg bg-neutral text-white hover:btn-primary mt-2 uppercase"
              >
                buy it now
              </button>
              <button
                onClick={() => handleCart(product?._id)}
                className="px-4 py-2 rounded-lg bg-secondary mx-3 text-white hover:btn-primary mt-2 uppercase"
              >
                Add to Cart
              </button>
            </div>
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
