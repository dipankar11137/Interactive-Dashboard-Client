import React from 'react';
import { BsFillCartDashFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
const Header = () => {
  const handleClick = e => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };
  return (
    <div className="flex mx-20">
      <div className="flex items-center">
        {' '}
        <Link to="/">
          {' '}
          <h1 className="text-4xl font-extrabold uppercase">
            Elec<span className="text-primary">tro</span> Li
            <span className="text-primary italic">gh</span>t
          </h1>
        </Link>
      </div>

      <div className="py-2  ml-20 flex">
        <input
          onChange={handleClick}
          className="w-[500px] border-2 p-2 rounded-l-lg border-blue-200"
          placeholder="hello"
          type="search"
        />
        <button className="px-3 bg-primary pt-[6px] pb-4 rounded-r-lg ">
          {' '}
          <ImSearch className="text-3xl pt-1 -mb-2 text-white hover:text-black" />
        </button>

        <div className="flex items-center ml-20">
          <FaRegHeart className="text-2xl" />
          <div className="flex ml-10 ">
            <BsFillCartDashFill className="text-2xl mt-1" />
            <h1 className="text-2xl ml-1 font-bold">Cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
