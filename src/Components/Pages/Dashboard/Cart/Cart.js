import React from 'react';

const Cart = ({ cart, handleDelete, handleBuy }) => {
  return (
    <tr className="text-center">
      <td>
        <img
          className="w-24 h-24 rounded-3xl"
          src={cart?.product?.img}
          alt=""
        />
      </td>
      <td>{cart?.product?.name}</td>
      <td>{cart?.product?.price} Taka</td>
      <td>{cart?.product?.description}</td>

      <td>
        <button
          onClick={() => handleBuy(cart?.product?._id)}
          className="btn btn-primary btn-sm font-bold"
        >
          Buy Now
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(cart?._id)}
          className="btn btn-secondary btn-sm font-bold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Cart;
