import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
// import axios from "axios";
import Loading from '../Share/Loading';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  const onSubmit = async data => {
  
    await signInWithEmailAndPassword(data.email, data.password);
    
  };

  return (
    <div className="flex justify-center ">
      <div className="flex justify-center mt-5 ">
        <div className="card w-96 shadow-2xl shadow-blue-900 bg-violet-50">
          <div className="card-body">
            <div className="flex justify-center">
              <img
                className="w-24 h-20 "
                src="https://cdn.pixabay.com/animation/2022/12/20/03/45/03-45-09-865_512.gif"
                alt=""
              />
            </div>
            {/* <h2 className="text-center text-2xl">Login</h2> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is Required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email',
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-white w-full max-w-xs"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is Required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer',
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {signInError}
              <input
                className="btn btn-orange-500 w-full text-white"
                type="submit"
                value="Login"
              />
            </form>
            <p>
              <small>
                New to ELECTRO LIGHT?{' '}
                <Link to="/createAccount" className="text-orange-600 font-bold">
                  Create New Account
                </Link>
              </small>
            </p>
            {/* <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline font-black"
            >
              Continue With Google
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
