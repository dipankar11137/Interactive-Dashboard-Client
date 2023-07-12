import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillCartDashFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Header = () => {
  const [authUser] = useAuthState(auth);
  const [dbUser, setDbUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${authUser?.email}`)
      .then(res => res.json())
      .then(data => setDbUser(data));
  }, [dbUser, authUser]);

  const handleClick = e => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };
  const profilePic =
    'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=';
  return (
    <div className="flex ml-20">
      <div className="flex items-center">
        {' '}
        <Link to="/">
          {' '}
          <h1 className="text-3xl font-extrabold uppercase">
            Elec<span className="text-primary">tro</span> Li
            <span className="text-primary italic">gh</span>t
          </h1>
        </Link>
      </div>

      <div className="py-2  ml-20 flex">
        <input
          onChange={handleClick}
          className="w-[500px] border-2 p-2 rounded-l-lg border-blue-200"
          placeholder="Search Hare"
          type="search"
        />
        <button className="px-3 bg-primary pt-[6px] pb-4 rounded-r-lg ">
          {' '}
          <ImSearch className="text-3xl pt-1 -mb-2 text-white hover:text-black" />
        </button>

        <div className="flex items-center ml-20 ">
          <FaRegHeart className="text-2xl" />
          <div className="flex ml-10 ">
            <BsFillCartDashFill className="text-2xl mt-1" />
            <h1 className="text-2xl ml-1 font-bold">Cart</h1>
          </div>
          <div className="ml-5">
            {authUser && (
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img
                    className=" w-10 h-10 indicator-item indicator-center rounded-full"
                    src={dbUser[0]?.image || profilePic}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
