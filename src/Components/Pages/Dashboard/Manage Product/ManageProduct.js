import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdRemoveCircle } from 'react-icons/md';

const ManageProduct = ({
  index,
  blood,
  handleRestock,
  handleEdit,
  singleBlood,
  handleDecrease,
}) => {
  const [increase, setIncrease] = useState(false);
  const [decrease, setDecrease] = useState(false);
  return (
    <tr className="font-bold text-sm">
      <th>{index}</th>
      <td>
        <img className="w-14 h-14" src={blood?.img} alt="" />
      </td>
      <td>{blood?.name}</td>
      <td>{blood?.price}</td>
      <td>{blood?.quantity}</td>

      <td className="bg-rose-50">
        {increase ? (
          <></>
        ) : (
          <div className="flex justify-center">
            <FaEdit
              onClick={() => setIncrease(true)}
              className="text-2xl text-neutral cursor-pointer hover:text-primary"
            />
          </div>
        )}
        {increase && (
          <div>
            <form onSubmit={handleRestock}>
              <input
                type="number"
                name="quantity"
                id=""
                placeholder="Enter a Number"
                className="input h-[40px] w-[200px] input-bordered input-error hover:border-lime-500"
              />

              <input
                onClick={() => setIncrease(false)}
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
        {decrease ? (
          <></>
        ) : (
          <div className="flex justify-center">
            <MdRemoveCircle
              onClick={() => setDecrease(true)}
              className="text-3xl text-neutral cursor-pointer hover:text-primary"
            />
          </div>
        )}
        {decrease && (
          <div>
            <form onSubmit={handleDecrease}>
              <input
                type="number"
                name="quantity"
                id=""
                placeholder="Enter a Number"
                className="input h-[40px] w-[200px] input-bordered input-error hover:border-lime-500"
              />

              <input
                onClick={() => setDecrease(false)}
                type="submit"
                className=" ml-3 btn mt-2 btn-neutral pt-1 btn-sm text-white  font-bold rounded-lg"
                value="Decrease"
              />
            </form>
          </div>
        )}
      </td>

      <td>
        <button className="btn btn-secondary btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default ManageProduct;
