import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdRemoveCircle } from 'react-icons/md';

const ManageProduct = ({
  index,
  product,
  handleRestock,
  handleEdit,
  handleDecrease,
  increase,
  setIncrease,
  decrease,
  setDecrease,
  handleDelete,
}) => {
  return (
    <tr className="font-bold text-sm">
      <th>{index}</th>
      <td>
        <img className="w-14 h-14" src={product?.img} alt="" />
      </td>
      <td>{product?.name}</td>
      <td>{product?.price}</td>
      <td>{product?.quantity}</td>

      <td className="bg-rose-50">
        {increase === `${product?._id}` ? (
          <></>
        ) : (
          <div className="flex justify-center">
            <button onClick={() => handleEdit(product?._id)}>
              {' '}
              <FaEdit
                onClick={() => setIncrease(product?._id)}
                className="text-2xl text-neutral cursor-pointer hover:text-primary"
              />
            </button>
          </div>
        )}
        {increase === `${product?._id}` && (
          <div data-aos="zoom-in-left" data-aos-duration="1000">
            <form onSubmit={handleRestock}>
              <input
                type="number"
                name="quantity"
                id=""
                placeholder="Enter a Number"
                className="input h-[40px] w-[200px] input-bordered input-error hover:border-lime-500"
              />

              <input
                type="submit"
                className=" ml-3 btn mt-2 btn-neutral pt-1 btn-sm text-white  font-bold rounded-lg"
                value="Restock"
              />
            </form>
          </div>
        )}
      </td>

      <td className="bg-blue-50">
        {' '}
        {decrease === `${product?._id}` ? (
          <></>
        ) : (
          <button onClick={() => handleEdit(product?._id)}>
            <div className="flex justify-center">
              <MdRemoveCircle
                onClick={() => setDecrease(product?._id)}
                className="text-3xl text-red-700 cursor-pointer hover:text-neutral"
              />
            </div>
          </button>
        )}
        {decrease === `${product?._id}` && (
          <div data-aos="zoom-in-right" data-aos-duration="1000">
            <form onSubmit={handleDecrease}>
              <input
                type="number"
                name="quantity"
                id=""
                placeholder="Enter a Number"
                className="input h-[40px] w-[200px] input-bordered input-error hover:border-lime-500"
              />

              <input
                type="submit"
                className=" ml-3 btn mt-2 btn-neutral pt-1 btn-sm text-white  font-bold rounded-lg"
                value="Decrease"
              />
            </form>
          </div>
        )}
      </td>

      <td>
        <button
          onClick={() => handleDelete(product?._id)}
          className="w-20 h-10"
        >
          <img
            src="https://app.tryzulu.com/assets/static/images/delete-gif-dark-mode.gif"
            alt=""
          />
        </button>
      </td>
    </tr>
  );
};

export default ManageProduct;
