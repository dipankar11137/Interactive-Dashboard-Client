import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import backgroundImage from '../../../../Images/Background/ba.jpg';
import auth from '../../../../firebase.init';

const BuyProducts = () => {
  const { id } = useParams();
  const [users] = useAuthState(auth);
  const email = users?.email;
  const userName = users?.displayName;
  const [quantity, setQuantity] = useState('');
  const [product, setProduct] = useState([]);

  const totalPrice = quantity * product?.price;

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    if (product?.quantity >= quantity) {
      const changeUrl = {
        ...data,
        quantity,
        totalPrice,
        product,
        email,
        userName,
      };
      // console.log(changeUrl);
      const url = `http://localhost:5000/buyProducts`;
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(changeUrl),
      })
        .then(res => res.json())
        .then(result => {
          toast.success('Successfully Buy This Products');
          reset();
        });
    } else {
      toast.error('This quantity is longer than available quantity');
    }
  };
  return (
    <div
      data-aos="zoom-out"
      data-aos-offset="200"
      data-aos-delay="60"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '821px',
        }}
        className=" backdrop-blur"
      >
        <div className="flex justify-end gap-x-20" style={{ zIndex: '2' }}>
          <div
            style={{ boxShadow: '1px 2px 9px #F4AAB9' }}
            className=" mt-3 p-5 rounded-2xl w-4/12  bg-black "
          >
            <h2 className="py-5 mr-32 font-bold text-2xl text-center text-white uppercase">
              Buy This Product
            </h2>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <input
                value={product?.name}
                type="text"
                className="input input-bordered bg-white w-full mb-4 font-bold text-blue-900   hover:shadow-xl shadow-inner text-center text-2xl"
              />

              {/* Quantity */}
              <label className="label">
                <span className="label-text text-white text-lg font-semibold">
                  Quantity
                </span>
              </label>
              <input
                onChange={e => setQuantity(e.target.value)}
                type="number"
                placeholder="Quantity"
                className="input input-bordered bg-white w-full  h-[40px]  hover:shadow-xl shadow-inner"
              />
              {/* Image */}
              <label className="label  text-xl font-semibold">
                <span className="label-text text-white text-lg">Date</span>
              </label>
              <input
                type="date"
                placeholder="Images URL"
                className="input input-bordered bg-white w-full h-[40px]  hover:shadow-xl shadow-inner"
                {...register('date', {
                  required: {
                    value: true,
                    message: 'Date is Required',
                  },
                })}
              />
              <label className="label">
                {errors.date?.type === 'required' && (
                  <span className="label-text-alt text-red-50">
                    {errors?.date?.message}
                  </span>
                )}
              </label>
              {/* Phone */}
              <label className="label  text-xl font-semibold">
                <span className="label-text text-white text-lg">Phone</span>
              </label>
              <input
                type="phone"
                placeholder="Phone Number"
                className="input input-bordered bg-white w-full h-[40px]  hover:shadow-xl shadow-inner"
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'Phone is Required',
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === 'required' && (
                  <span className="label-text-alt text-red-50">
                    {errors?.phone?.message}
                  </span>
                )}
              </label>

              {/* address */}
              <label className="label">
                <span className="label-text text-white text-lg font-semibold">
                  Address
                </span>
              </label>
              <textarea
                type="text"
                placeholder="Address"
                className="input input-bordered bg-white w-full  h-20 pt-1 hover:shadow-xl shadow-inner"
                {...register('address', {
                  required: {
                    value: true,
                    message: 'Address is Required',
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === 'required' && (
                  <span className="label-text-alt text-red-50">
                    {errors?.address?.message}
                  </span>
                )}
              </label>

              {/* submit */}
              {quantity ? (
                <input
                  className="btn  btn-secondary mt-5 w-full text-white font-bold text-2xl"
                  type="submit"
                  value="Buy Now"
                />
              ) : (
                <input
                  className="btn  btn-secondary mt-5 w-full text-white"
                  disabled
                  type="submit"
                  value="Buy Now"
                />
              )}
            </form>
          </div>
          <div
            style={{ boxShadow: '1px 2px 9px #F4AAB9' }}
            className="bg-black h-[350px] w-[500px] mr-20  mt-28 text-white p-4 rounded-xl"
          >
            <h1 className="text-3xl font-bold text-center text-blue-300 my-5 underline">
              {product?.name}
            </h1>
            <h1 className="text-2xl font-bold mt-10">
              Available Quantity : {product?.quantity}
            </h1>
            <h1 className="text-2xl font-bold mt-5"> Quantity : {quantity}</h1>
            <h1 className="text-2xl font-bold mt-5">
              {' '}
              Price : {product?.price}
            </h1>
            <hr className="mt-5" />
            <h1 className="text-2xl font-bold mt-3">
              Total Price : {totalPrice}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProducts;
