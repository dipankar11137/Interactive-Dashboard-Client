import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Profile = () => {
  const [authUser] = useAuthState(auth);
  const [dbUser, setDbUser] = useState([]);
  const user = dbUser[0];

  useEffect(() => {
    fetch(
      `https://interective-dashboard-server.onrender.com/user/${authUser?.email}`
    )
      .then(res => res.json())
      .then(data => setDbUser(data));
  }, [dbUser, authUser]);
  const profilePic =
    'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=';
  return (
    <div className="mt-28">
      <div className="flex justify-center text-black text-xl">
        {' '}
        <div
          style={{
            backgroundImage: `url("https://media.istockphoto.com/id/1359679957/photo/white-business-style-background.webp?b=1&s=170667a&w=0&k=20&c=_jkkQr7j10754um12gvj-PoROIlrsF9U0iJI8rk4fpU=")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="indicator  rounded-lg mt-10 m-4 w-5/12 h-fit shadow-2xl shadow-blue-900"
        >
          <div style={{ marginTop: '-20px' }} className="-mt-6 ">
            <img
              className=" w-72 h-72 indicator-item indicator-center rounded-full"
              src={dbUser[0]?.image || profilePic}
              alt=""
            />
          </div>
          <div className="mt-32 pl-4 w-full ">
            <div className="text-left py-8">
              <div className="flex items-baseline justify-between">
                <p className="font-bold w-1/3">Name</p>
                <span className="w-2/3">: {user?.name}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Email</p>
                <span className="w-2/3">: {user?.email}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Birthday</p>
                <span className="w-2/3">: {user?.birthday}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Phone</p>
                <span className="w-2/3">: {user?.phone}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Sex</p>
                <span className="w-2/3">: {user?.sex}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3">Bio</p>
                <span className="w-2/3">: {user?.bio}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
