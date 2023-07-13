import React, { useState } from 'react';

const CustomerReview = () => {
  var isChecked;
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Checkbox 1', checked: false },
    { id: 2, label: 'Checkbox 2', checked: false },
    { id: 3, label: 'Checkbox 3', checked: false },
  ]);

  const handleCheckboxChange = id => {
    setCheckboxes(prevCheckboxes =>
      prevCheckboxes.map(checkbox =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };
  return (
    <div className="bg-slate-100 w-[250px] p-3 rounded-lg pb-[200px]">
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

      <div className="mt-8 text-sm ">
        <h1 className="uppercase text-xl font-semibold mb-2">Price</h1>
        <p className="mb-2">Under $1,000</p>
        <p className="mb-2">$1,000 - $5,000</p>
        <p className="mb-2">$5,000 - $10,000</p>
        <p className="mb-2">$10,000 - $20,000</p>
        <p className="mb-2">$20,000 $30,000</p>
        <p>Over $30,000</p>
      </div>

      <div className="my-8">
        <h1 className="text-xl font-semibold">DISCOUNT</h1>
        <div className="flex mt-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> 5% or More</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> 10% or More</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> 10% or More</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> 20% or More</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> 30% or More</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> 50% or More</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> 60% or More</p>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-xl font-semibold">ELECTRONICS</h1>
        <div className="flex mt-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Accessories</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Cameras & Photography</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Car & Vehicle Electronics</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Computers & Accessories</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> GPS & Accessories</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Headphones</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Home Audio</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Home Theater, TV & Video</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Mobiles & Accessories</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Portable Media Players</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Tablets</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Telephones & Accessories</p>
        </div>
        <div className="flex ">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Wearable Technology</p>
        </div>
      </div>

      <div className="my-8">
        <h1 className="text-xl font-semibold">CASH ON DELIVERY</h1>
        <div className="flex mt-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Eligible for Cash On Delivery</p>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-xl font-semibold">NEW ARRIVALS</h1>
        <div className="flex mt-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2"> Last 30 days</p>
        </div>
        <div className="flex mt-3">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="mb-2 ml-2 mt-2">Last 90 days</p>
        </div>
      </div>

      <div className="my-8">
        <h1 className="text-xl font-semibold">BEST SELLER</h1>
        <div data-aos="fade-up" data-aos-duration="3000" className="flex mt-10">
          <img
            className="h-20 mt-5"
            src="https://wikimovel.com/images/thumb/1/1b/Samsung-Galaxy-F62.png/300px-Samsung-Galaxy-F62.png"
            alt=""
          />
          <div>
            {' '}
            <h1>Samsung Galaxy F62 (Laser Grey, 128 GB) (6 GB RAM)</h1>
            <h1 className="font-bold"> $790.00</h1>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" flex mt-10"
        >
          <img
            className="h-20 w-20 mt-5 mr-2"
            src="https://pngimg.com/d/headphones_PNG101951.png"
            alt=""
          />
          <div>
            {' '}
            <h1>Apple Headphone, Its sound quality is very good.</h1>
            <h1 className="font-bold"> $1299.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
