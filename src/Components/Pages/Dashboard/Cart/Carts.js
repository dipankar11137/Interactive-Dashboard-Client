import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Cart from './Cart';

const Carts = () => {
  const [authUser] = useAuthState(auth);
  const navigator = useNavigate();
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(
      `https://interective-dashboard-server.onrender.com/cartProducts/${authUser?.email}`
    )
      .then(res => res.json())
      .then(data => {
        setCarts(data);
      });
  }, [authUser?.email, carts]);

  const handleBuy = id => {
    navigator(`/buy/${id}`);
  };

  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `https://interective-dashboard-server.onrender.com/cartProduct/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = carts.filter(product => product._id !== id);
          setCarts(remaining);
          toast.success('Successfully Delete');
        });
    }
  };

  return (
    <div className=" mx-6 mt-2 pb-20">
      <h1 className="text-center text-3xl mb-2 font-semibold">Cart Items</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra bg-primary w-full">
          {/* head */}
          <thead>
            <tr className="text-center ">
              <th className="text-xl bg-lime-900 text-white"></th>
              <th className="text-xl bg-lime-900 text-white">Name</th>
              <th className="text-xl bg-lime-900 text-white">Price</th>
              <th className="text-xl bg-lime-900 text-white">Description</th>
              <th className="text-xl bg-lime-900 text-white">Buy</th>
              <th className="text-xl bg-lime-900 text-white">Delete</th>
            </tr>
          </thead>
          <tbody>
            {carts.map(cart => (
              <Cart
                key={cart._id}
                cart={cart}
                handleDelete={handleDelete}
                handleBuy={handleBuy}
              ></Cart>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carts;
