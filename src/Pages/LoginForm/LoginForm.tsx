import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaLock } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import Quote from "@/mycomponents/Quote";
import { twMerge } from "tailwind-merge";
import { RootState, AppDispatch } from '../../store/store';
import { login } from '../../store/features/auth/authSlice';
import libraryimage from "./images/library.jpg";
import googleimage from "./images/Google.jpg";

interface LoginFormProps {
  up: string;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
      
      if (props.up === 'user') {
        navigate('/librarylist');
      } else {
        navigate('/users');
      }
    } catch (error) {
      console.error('Failed to login:', error);
      
    }
  };

  return (
    <div className={twMerge("flex flex-col md:flex-row h-screen overflow-hidden")}>
      <div className={twMerge("md:w-1/2 relative")}>
        <img className={twMerge("h-full w-full object-cover")} src={libraryimage} alt="" />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-center">
          <Quote />
        </div>
      </div>

      <div className="md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className={twMerge("border border-gray-300 w-full md:w-3/5 h-7/10 p-6 rounded")}
        >
          <h1 className={twMerge("text-2xl text-center mb-6")}>Log In</h1>
          {auth.error && <div className="text-red-500 text-center mb-4">{auth.error}</div>}
          <div className={twMerge("flex flex-col gap-6")}>
            <div className={twMerge("relative")}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaUser className={twMerge("absolute right-3 top-1/2 transform -translate-y-1/2")} />
            </div>
            <div className={twMerge("relative")}>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className={twMerge("absolute right-3 top-1/2 transform -translate-y-1/2")} />
            </div>
          </div>
          <div className={twMerge("flex items-center gap-14 mt-4")}>
            <label>
              <Checkbox className="ml-5" /> Remember me
            </label>
            <Link className={twMerge("text-blue-700")} to="/">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className={twMerge("w-full mt-6")}>
            {auth.loading ? 'Logging in...' : 'Login'}
          </Button>
          <p className={twMerge('mt-6 text-center  relative flex items-center my-4 before:content-[""] before:flex-1 before:border-b before:border-black before:mx-3 after:content-[""] after:flex-1 after:border-b after:border-black after:mx-3')}>
            Or Login with
          </p>
          <div className={twMerge("flex justify-center gap-4 mt-2")}>
            <Button variant="outline" className={twMerge("flex items-center gap-1")}>
              <img className={twMerge("h-3 w-3")} src={googleimage} alt="Google" />
              Google
            </Button>
          </div>
          <div className={twMerge("text-center mt-4")}>
            <p>
              Want to register?{" "}
              <Link className={twMerge("text-blue-700")} to="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
