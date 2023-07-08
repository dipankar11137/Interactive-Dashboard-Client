import React from 'react';

const CustomerReview = () => {
  return (
    <div className="bg-slate-100 w-[250px] p-3 rounded-lg">
      <h1 className="uppercase text-xl font-semibold">Customer review</h1>
      <div className="flex gap-2 mt-2">
        <div className="rating rating-sm mt-1">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>
        <h1>5.0</h1>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="rating rating-sm mt-1">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>
        <h1>4.0</h1>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="rating rating-sm mt-1">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>
        <h1>3.0</h1>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="rating rating-sm mt-1">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>
        <h1>2.0</h1>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="rating rating-sm mt-1">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>
        <h1>1.0</h1>
      </div>

      <div className="mt-5 text-sm ">
        <h1 className="uppercase text-xl font-semibold mb-2">Price</h1>
        <p className="mb-1">Under $1,000</p>
        <p className="mb-1">$1,000 - $5,000</p>
        <p className="mb-1">$5,000 - $10,000</p>
        <p className="mb-1">$10,000 - $20,000</p>
        <p className="mb-1">$20,000 $30,000</p>
        <p>Over $30,000</p>
      </div>
    </div>
  );
};

export default CustomerReview;
