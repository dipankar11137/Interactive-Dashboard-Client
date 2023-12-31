import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaHandPointRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AddItem = () => {
  // const [user] = useAuthState(auth);
  // const email = user?.email;
  const [category, setCategory] = useState('');
  const imageHostKey = 'ab492fa3bd4253f25e449094e4b48480';

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;
        const changeUrl = { ...data, category: category, img: image };
        console.log(changeUrl);
        fetch(`https://interective-dashboard-server.onrender.com/allProduct`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(changeUrl),
        })
          .then(res => res.json())
          .then(data => {
            toast.success('Successfully Add A Product');
            reset();
          });
      });
  };
  return (
    <div className=" pb-20">
      {/* <h2 className="mt-5 ml-10 font-bold text-4xl text-center text-orange-500 uppercase">
        Please Add A Technician
      </h2> */}
      <div className=" p-5 rounded-xl w-11/12 mt-5 ml-5 shadow-md shadow-blue-900">
        <form
          className=" flex justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-32 pr-20 ">
            <div className="mb-10 flex">
              <FaHandPointRight
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
                className="text-3xl text-red-600"
              />
              <h1 className="text-2xl font-bold uppercase text-blue-900 ml-5">
                Add a product
              </h1>
            </div>
            <select
              onChange={e => setCategory(e.target.value)}
              className="select select-primary w-96 max-w-xs text-lg"
            >
              <option disabled selected>
                Select Your Technician
              </option>
              <option className="text-lg text-blue-900 ">
                Computer Accessories
              </option>
              <option className="text-lg text-blue-900 ">TV</option>
              <option className="text-lg text-blue-900 ">Headphone</option>
              <option className="text-lg text-blue-900 ">Mobile</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-lg font-semibold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Product name"
              className="input h-[40px] input-bordered bg-white lg:w-96 sm:w-full max-w-xs hover:shadow-xl shadow-inner border-blue-900 "
              {...register('name', {
                required: {
                  value: true,
                  message: 'Name is Required',
                },
              })}
            />
            <label className="label">
              {errors.name?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.name?.message}
                </span>
              )}
            </label>

            {/* image */}
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Input Image{' '}
              </span>
            </label>
            <input
              type="file"
              className="input h-[40px] input-bordered text-black w-96  pt-1 sm:w-full max-w-xs  hover:shadow-xl shadow-inner"
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is Required',
                },
              })}
            />

            <label className="label">
              {errors.image?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.image?.message}
                </span>
              )}
            </label>
            {/* Quantity */}
            <label className="">
              <span className="label-text text-lg font-semibold">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className="input h-[40px] input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner border-blue-900"
              {...register('quantity', {
                required: {
                  value: true,
                  message: 'Quantity is Required',
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.quantity?.message}
                </span>
              )}
            </label>
            {/* Price */}
            <label className="">
              <span className="label-text text-lg font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input h-[40px] input-bordered bg-white w-full max-w-xs  hover:shadow-xl shadow-inner border-blue-900"
              {...register('price', {
                required: {
                  value: true,
                  message: 'Price is Required',
                },
              })}
            />
            <label className="label">
              {errors.price?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.price?.message}
                </span>
              )}
            </label>

            {/* Description */}
            <label className="">
              <span className="label-text text-lg font-semibold">
                Description
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              className="input input-bordered bg-white w-full max-w-xs h-20 pt-1 hover:shadow-xl shadow-inner border-blue-900"
              {...register('description', {
                required: {
                  value: true,
                  message: 'Description is Required',
                },
              })}
            />
            <label className="label">
              {errors.description?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors?.description?.message}
                </span>
              )}
            </label>

            {category ? (
              <input
                className="btn mt-5 w-full disable text-white"
                type="submit"
                value="ADD"
              />
            ) : (
              <input
                className="btn mt-5 w-full text-white"
                disabled
                type="submit"
                value="ADD"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
