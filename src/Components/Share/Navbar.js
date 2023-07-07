import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  console.log(user);

  const [selectedButton, setSelectedButton] = useState('');

  const menuItem = (
    <>
      <li
        onClick={() => setSelectedButton('Button 1')}
        className={
          selectedButton === 'Button 1'
            ? 'bg-primary text-black  rounded-lg'
            : ''
        }
      >
        <Link to="/" className="font-bold  text-xl ">
          Home
        </Link>
      </li>
      <li
        onClick={() => setSelectedButton('Button 2')}
        className={
          selectedButton === 'Button 2'
            ? 'bg-primary text-black rounded-lg'
            : ''
        }
      >
        <Link to="/blog" className="font-bold  text-xl ">
          Blog
        </Link>
      </li>

      {user && (
        <>
          {user.email === 'abc@def.com' ? (
            <>
              {/* {' '}
              <li
                onClick={() => setSelectedButton('Button 4')}
                className={
                  selectedButton === 'Button 4'
                    ? 'bg-primary  rounded-lg text-black'
                    : ''
                }
              >
                <Link to="/manageItem" className="font-bold  text-xl ">
                  Manage Item
                </Link>
              </li>
              <li
                onClick={() => setSelectedButton('Button 8')}
                className={
                  selectedButton === 'Button 8' ? 'bg-primary  rounded-lg' : ''
                }
              >
                <Link to="/manageBooking" className="font-bold  text-xl ">
                  Manage Booking
                </Link>
              </li> */}
            </>
          ) : (
            <li
              onClick={() => setSelectedButton('Button 5')}
              className={
                selectedButton === 'Button 5'
                  ? 'bg-primary text-white rounded-lg'
                  : ''
              }
            >
              <Link to="/myItem" className="font-bold  text-xl ">
                My Booking
              </Link>
            </li>
          )}
        </>
      )}

      <li>
        {user ? (
          <p onClick={logout}>Sign Out</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="px-20 bg-neutral">
      <div class="navbar px-12  h-[8px] mx-auto  text-white shadow-2xl rounded-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box w-52 text-neutral"
            >
              {menuItem}
            </ul>
          </div>
          <Link to={'/'}>
            <div className=" ">
              <select className="select select-ghost w-full max-w-xs">
                <option disabled selected>
                  Pick the best JS framework
                </option>
                <option>Svelte</option>
                <option>Vue</option>
                <option>React</option>
              </select>
            </div>
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal  font-bold text-xl hover:bg-se">
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
