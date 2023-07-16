import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import '../../../CSS/ChatBot.css';
import ChatBot from '../Chat Bot/ChatBot';
import MyBooking from './MyBooking';

const MyBookings = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [buys, setBuys] = useState([]);
  const [chat, setChat] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/buyProduct/${email}`)
      .then(res => res.json())
      .then(data => setBuys(data));
  }, [buys, email]);

  const handlePayment = id => {
    navigate(`/payment/${id}`);
  };

  const handleRemove = id => {
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
        {chat ? (
          <></>
        ) : (
          <div className="flex justify-end ">
            <div className="chat-bot-style  bottom-0">
              <button onClick={() => setChat(true)}>
                <img
                  className="w-20 h-20"
                  src="https://icon-library.com/images/iphone-messenger-icon/iphone-messenger-icon-29.jpg"
                  alt=""
                />
              </button>
            </div>
          </div>
        )}
        {chat && (
          <div className=" flex justify-end mb-[20px] mr-11 ">
            {' '}
            <div className="flex ">
              <div className="chat-bot-style flex">
                <ChatBot />
              </div>
              <div className=" ml-72 pt-2 ">
                <button
                  onClick={() => setChat(false)}
                  className="w-10 h-10 chat-cross mt-6 -ml-2"
                >
                  <img
                    className="hover:cursor-pointer"
                    src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-sm">Index</th>
              <th className="text-sm">Name</th>

              <th className="text-sm">Quantity</th>
              <th className="text-sm">Total Price</th>
              <th className="text-sm">Date</th>
              <th className="text-sm">Phone</th>
              <th className="text-sm">Address</th>
              <th className="text-sm">Payment</th>
              <th className="text-sm">Remove</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {buys.map((buy, index) => (
              <MyBooking
                key={buy._id}
                buy={buy}
                index={index + 1}
                handleRemove={handleRemove}
                handlePayment={handlePayment}
              ></MyBooking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
