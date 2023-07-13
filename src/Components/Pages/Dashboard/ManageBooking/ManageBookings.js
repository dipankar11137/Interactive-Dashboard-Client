import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageBooking from './ManageBooking';

const ManageBookings = () => {
  const [buys, setBuys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/buyProducts`)
      .then(res => res.json())
      .then(data => setBuys(data));
  }, [buys]);

  const handleDelivered = id => {
    const updateDelivered = { delivered: true };
    fetch(`http://localhost:5000/buyDelivered/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateDelivered),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully Delivered  Blood ');
      });
  };

  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/buyProduct/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = buys.filter(product => product._id !== id);
          setBuys(remaining);
          toast.success('Successfully Delete');
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto p-2">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-sm">Index</th>
              <th className="text-sm">Name</th>
              <th className="text-sm">Product Name</th>
              <th className="text-sm">Quantity</th>
              <th className="text-sm">Total Price</th>
              <th className="text-sm">Date</th>
              <th className="text-sm">Phone</th>
              <th className="text-sm">Address</th>
              <th className="text-sm">Delivered</th>
              <th className="text-sm">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {buys.map((buy, index) => (
              <ManageBooking
                key={buy._id}
                buy={buy}
                index={index + 1}
                handleDelivered={handleDelivered}
                handleDelete={handleDelete}
              ></ManageBooking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
