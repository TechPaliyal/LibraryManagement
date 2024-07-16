import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaLock } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { RootState, AppDispatch } from '../../store/store';
import { signup } from '../../store/features/auth/authSlice'; 
import libraryimage from "./images/library.jpg";
import Quote from "@/mycomponents/Quote";

interface InputState {
  email: string;
  password: string;
  confirmpassword: string;
}

function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);

  const [input, setInput] = useState<InputState>({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.password !== input.confirmpassword) {
      alert("Password and confirm password do not match.");
    } else {
      dispatch(signup({ email: input.email, password: input.password }))
        .unwrap()
        .then(() => {
          navigate("/");
          console.log(input)
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        });
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
          <h1 className={twMerge("text-2xl text-center mb-6")}>Register</h1>
          {auth.error && <div className="text-red-500 text-center mb-4">{auth.error}</div>}
          <div className={twMerge("flex flex-col gap-6")}>
            <div className={twMerge("relative")}>
              <Input
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="email"
                placeholder="Email"
              />
              <FaUser className={twMerge("absolute right-3 top-1/2 transform -translate-y-1/2")} />
            </div>
            <div className={twMerge("relative")}>
              <Input
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="password"
                placeholder="Password"
              />
              <FaLock className={twMerge("absolute right-3 top-1/2 transform -translate-y-1/2")} />
            </div>
            <div className={twMerge("relative")}>
              <Input
                name="confirmpassword"
                value={input.confirmpassword}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="password"
                placeholder="Confirm Password"
              />
              <FaLock className={twMerge("absolute right-3 top-1/2 transform -translate-y-1/2")} />
            </div>
          </div>
          <Button type="submit" className={twMerge("w-full mt-6")}>
            {auth.loading ? 'Registering...' : 'Register'}
          </Button>
          <p className={twMerge('mt-6 text-center relative flex items-center my-4 before:content-[""] before:flex-1 before:border-b before:border-black before:mx-3 after:content-[""] after:flex-1 after:border-b after:border-black after:mx-3')}>
            Or
          </p>
          <div className={twMerge("text-center mt-4")}>
            Already have an account?{" "}
            <Link to="/login" className={twMerge("text-blue-700")}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
