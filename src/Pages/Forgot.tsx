import Quote from "@/mycomponents/Quote";
import { twMerge } from "tailwind-merge";
import libraryimage from './images/library.jpg'
import { Input } from "@/components/ui/input";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Forgotpwdmodal from "@/mycomponents/Forgotpwdmodal";
import { useNavigate } from "react-router-dom";


function Forgot() {
  const [isModalOpen , setIsModalOpen] = useState(false);
  const [isModalTwOpen , setIsModalTwOpen] = useState(false);
  const Navigate = useNavigate();

  const otpSent = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
     setIsModalOpen(true)
  }
  const otpSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(false);
    setIsModalTwOpen(true)
  }
  const pwdChanged = () => {
    setIsModalOpen(false);
    setIsModalTwOpen(false);
    Navigate("/user/login")
  }

  return (
    <div
      className={twMerge("flex flex-col md:flex-row h-screen overflow-hidden")}
    >
      <div className={twMerge("md:w-1/2 relative")}>
        <img
          className={twMerge("h-full w-full object-cover")}
          src={libraryimage}
          alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-center">
          <Quote />
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <form onSubmit={otpSent}
          className={twMerge(
            "border border-gray-300 w-full md:w-3/5 h-7/10 p-6 rounded"
          )}
        >
          <h1 className={twMerge("text-2xl text-center mb-6")}>Recover password</h1>
          <div className={twMerge("flex flex-col gap-6")}>
            <div className={twMerge("relative")}>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email here"
              />
              <FaUser
                className={twMerge(
                  "absolute right-3 top-1/2 transform -translate-y-1/2"
                )}
              />
            </div>
 
          </div>
          <div className="flex justify-center">
          <Button type="submit" className={twMerge("w-2/4 mt-5")}>
            Send Otp
          </Button>
          </div>
        </form>
      </div>
     {isModalOpen && (
        <Forgotpwdmodal  step="step1"
                       onsubmit = {otpSubmit}/>
     )}
     {isModalTwOpen && (
        <Forgotpwdmodal step="step2"
                       onsubmit = {pwdChanged}/>
     )}
      </div>
  )
}

export default Forgot