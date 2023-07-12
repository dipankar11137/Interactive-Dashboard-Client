import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
  const [bloods, setBloods] = useState([5]);
  const [singleBlood, setSingleBlood] = useState({});
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setBloods(data));
  }, [bloods]);
  const handleEdit = id => {
    fetch(`http://localhost:5000/blood/${id}`)
      .then(res => res.json())
      .then(data => setSingleBlood(data));
  };
  const handleRestock = event => {
    event.preventDefault();
    const newQuantity =
      parseInt(event.target.quantity.value) + parseInt(singleBlood?.quantity);
    // console.log(newQuantity);
    const updateQuantity = { quantity: newQuantity };
    fetch(`http://localhost:5000/bloodId/${singleBlood?._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateQuantity),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Restock Is Successfully');
        event.target.reset();
      });
  };

  const handleDecrease = event => {
    event.preventDefault();
    if (
      parseInt(singleBlood?.quantity) >= parseInt(event.target.quantity.value)
    ) {
      const newQuantity =
        parseInt(singleBlood?.quantity) - parseInt(event.target.quantity.value);

      const updateQuantity = { quantity: newQuantity };
      fetch(`http://localhost:5000/bloodId/${singleBlood?._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateQuantity),
      })
        .then(res => res.json())
        .then(data => {
          toast.success('Decrease Is Successfully');
          event.target.reset();
        });
    } else {
      toast.error('The new value is greater than the previous value');
      event.target.reset();
    }
  };
  return (
    <div>
      <div className="overflow-x-auto p-2">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-lg">Index</th>
              <th className="text-lg">Image</th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Quantity</th>
              <th className="text-lg">Increase Quantity</th>
              <th className="text-lg">Decrease</th>
              <th className="text-lg">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {bloods.map((blood, index) => (
              <ManageProduct
                key={blood._id}
                blood={blood}
                index={index + 1}
                handleEdit={handleEdit}
                singleBlood={singleBlood}
                handleRestock={handleRestock}
                handleDecrease={handleDecrease}
              ></ManageProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
