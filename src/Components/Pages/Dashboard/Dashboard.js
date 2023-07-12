import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineUser } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { MdContactMail, MdOutlineLibraryAdd } from 'react-icons/md';
import { RiFolderSettingsFill, RiLuggageCartFill } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  console.log(user.email);

  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white ">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side navigation ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <section className="flex ">
              <div
                className={` ${
                  open ? 'w-60' : 'w-20 '
                } bg-green-900 h-screen p-5 text-white pt-8 relative duration-300`}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2012/04/11/17/14/left-28998_1280.png"
                  className={`absolute cursor-pointer -right-3 top-9 w-7  
             border-2 rounded-full  ${!open && 'rotate-180'}`}
                  onClick={() => setOpen(!open)}
                  alt=""
                />
                <div className="flex gap-x-4 items-center">
                  <Link to={'/dashboard'}>
                    {' '}
                    <img
                      src="https://www.svgrepo.com/download/7869/settings.svg"
                      className={`cursor-pointer duration-500 rounded-full ${
                        open && 'rotate-[360deg] h-20  '
                      }`}
                      alt=""
                    />
                  </Link>
                </div>

                <div className="mt-4 flex flex-col gap-4 relative">
                  <Link
                    to="/dashboard/profile"
                    className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                  >
                    <div>
                      {React.createElement(AiOutlineUser, { size: '20' })}
                    </div>
                    <h2
                      style={{
                        transitionDelay: `${0 + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && 'opacity-0 translate-x-28 overflow-hidden '
                      }`}
                    >
                      Profile
                    </h2>
                  </Link>

                  <Link
                    to="/dashboard/editProfile"
                    className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                  >
                    <div>{React.createElement(BiEdit, { size: '20' })}</div>
                    <h2
                      style={{
                        transitionDelay: `${0 + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && 'opacity-0 translate-x-28 overflow-hidden '
                      }`}
                    >
                      Edit Profile
                    </h2>
                  </Link>
                  <Link
                    to="/dashboard/myBooking"
                    className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                  >
                    <div>
                      {React.createElement(BsFillCartCheckFill, { size: '20' })}
                    </div>
                    <h2
                      style={{
                        transitionDelay: `${0 + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && 'opacity-0 translate-x-28 overflow-hidden '
                      }`}
                    >
                      My Booking
                    </h2>
                  </Link>
                  <Link
                    to="/dashboard/manageBooking"
                    className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                  >
                    <div>
                      {React.createElement(RiLuggageCartFill, { size: '20' })}
                    </div>
                    <h2
                      style={{
                        transitionDelay: `${0 + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && 'opacity-0 translate-x-28 overflow-hidden '
                      }`}
                    >
                      Manage Booking
                    </h2>
                  </Link>
                  <Link
                    to="/dashboard/addProduct"
                    className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                  >
                    <div>
                      {React.createElement(MdOutlineLibraryAdd, {
                        size: '24',
                      })}
                    </div>
                    <h2
                      style={{
                        transitionDelay: `${0 + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && 'opacity-0 translate-x-28 overflow-hidden '
                      }`}
                    >
                      Add Product
                    </h2>
                  </Link>
                  <Link
                    to="/dashboard/manageProduct"
                    className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                  >
                    <div>
                      {React.createElement(RiFolderSettingsFill, {
                        size: '20',
                      })}
                    </div>
                    <h2
                      style={{
                        transitionDelay: `${0 + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && 'opacity-0 translate-x-28 overflow-hidden '
                      }`}
                    >
                      Manage Product
                    </h2>
                  </Link>
                  <Link
                    to="/dashboard/manageProduct"
                    className={`  group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                  >
                    <div>
                      {React.createElement(MdContactMail, {
                        size: '20',
                      })}
                    </div>
                    <h2
                      style={{
                        transitionDelay: `${0 + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && 'opacity-0 translate-x-28 overflow-hidden '
                      }`}
                    >
                      Manage Contact
                    </h2>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
