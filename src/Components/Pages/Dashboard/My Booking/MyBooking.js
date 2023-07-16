import React from 'react';
import map from '../../../../Images/Map/Share Trip Reminder.gif';

const MyBooking = ({ buy, index, handleRemove, handlePayment }) => {
  console.log(buy);
  return (
    <div className="flex justify-center mb-10">
      <div className="shadow-2xl border-2 border-blue-900 rounded-lg">
        <div className="border-b-rose-900 border-b-2">
          {' '}
          <h1 className="text-center mt-3">
            Product id : {buy?.product?._id}{' '}
          </h1>
          <h1 className="text-center">Order Number: {buy?._id}</h1>
        </div>

        <div className="flex justify-center gap-10 mt-5">
          <div className="p-3">
            <img
              className="h-40 w-60 rounded-md"
              src={buy?.product?.img}
              alt=""
            />
          </div>
          <div className="w-[400px] p-3 text-xl">
            <h1>Product Name : {buy?.product?.name}</h1>
            <h1>Order Date : {buy?.date}</h1>
            <h1>Present Location : {buy?.address}</h1>
            <h1>Total Price : {buy?.totalPrice}</h1>
          </div>
          <div className=" w-[200px]">
            {buy?.payment ? (
              <>
                {' '}
                {buy.delivered ? (
                  <img className="h-40 -ml-10 rounded-md" src={map} alt="" />
                ) : (
                  <h1 className="text-neutral font-bold text-2xl text-center mt-10">
                    Waiting For Delivery
                  </h1>
                )}
              </>
            ) : (
              <h1 className="text-secondary font-extrabold text-2xl text-center mt-10">
                Pay First
              </h1>
            )}
          </div>
        </div>
        <div className="flex justify-center pb-5 bg-blue-200 pt-2 gap-x-10">
          {buy?.payment ? (
            <h1 className="font-extrabold text-orange-600 text-xl shadow-2xl">
              Paid
            </h1>
          ) : (
            <button
              onClick={() => handlePayment(buy?._id)}
              className="btn btn-secondary  btn-sm text-white shadow-2xl"
            >
              Payment
            </button>
          )}
          <button
            onClick={() => handleRemove(buy?._id)}
            className="btn btn-primary  btn-sm text-white"
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
    </div>
    // <tr>
    //   <th>{index}</th>
    //   <td>{buy?.product?.name}</td>
    //   <td>{buy?.quantity}</td>
    //   <td>{buy?.totalPrice}</td>
    //   <td>{buy?.date}</td>
    //   <td>{buy?.phone}</td>
    //   <td>{buy?.address}</td>

    //   <td>
    //     {buy?.status === 'Free' ? (
    //       <h1 className="font-extrabold text-blue-600 text-xl"> Free</h1>
    //     ) : (
    //       <>
    //         {' '}
    //         {buy?.payment ? (
    //           <h1 className="font-extrabold text-orange-600 text-xl">Paid</h1>
    //         ) : (
    //           <button
    //             onClick={() => handlePayment(buy?._id)}
    //             className="btn btn-secondary  btn-sm text-white"
    //           >
    //             Payment
    //           </button>
    //         )}
    //       </>
    //     )}
    //   </td>
    //   <td>
    //     {' '}
    //     <button
    //       onClick={() => handleRemove(buy?._id)}
    //       className="btn btn-primary  btn-sm text-white"
    //     >
    //       Remove
    //     </button>
    //   </td>
    // </tr>
  );
};

export default MyBooking;
