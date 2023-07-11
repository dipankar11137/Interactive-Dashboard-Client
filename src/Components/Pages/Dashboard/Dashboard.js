import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiFolder, FiMessageSquare, FiShoppingCart } from 'react-icons/fi';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const menus = [
    { name: 'dashboard', link: '/dashboard', icon: MdOutlineDashboard },
    { name: 'user', link: '/dashboard/profile', icon: AiOutlineUser },
    { name: 'messages', link: '/dashboard/editProfile', icon: FiMessageSquare },
    { name: 'analytics', link: '/', icon: TbReportAnalytics },
    { name: 'File Manager', link: '/', icon: FiFolder },
    { name: 'Cart', link: '/', icon: FiShoppingCart },
    { name: 'Saved', link: '/', icon: AiOutlineHeart },
    { name: 'Setting', link: '/', icon: RiSettings4Line },
  ];

  const [open, setOpen] = useState(true);
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
                  open ? 'w-52' : 'w-20 '
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
                  <img
                    src="https://p7.hiclipart.com/preview/707/501/155/hardware-accessory-circle-settings.jpg"
                    className={`cursor-pointer duration-500 ${
                      open && 'rotate-[360deg] h-20  '
                    }`}
                    alt=""
                  />
                </div>

                <div className="mt-4 flex flex-col gap-4 relative">
                  {menus?.map((menu, i) => (
                    <Link
                      to={menu?.link}
                      key={i}
                      className={` ${
                        menu?.margin && 'mt-5'
                      } group flex items-center text-xl  gap-3.5 font-medium p-2 hover:bg-primary rounded-md`}
                    >
                      <div>
                        {React.createElement(menu?.icon, { size: '20' })}
                      </div>
                      <h2
                        style={{
                          transitionDelay: `${i + 3}00ms`,
                        }}
                        className={`whitespace-pre duration-500 ${
                          !open && 'opacity-0 translate-x-28 overflow-hidden '
                        }`}
                      >
                        {menu?.name}
                      </h2>
                      <h2
                        className={`${
                          open && 'hidden'
                        } absolute  left-48 bg-white text-2xl font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                      >
                        {menu?.name}
                      </h2>
                    </Link>
                  ))}
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
