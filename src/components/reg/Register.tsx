import { FaUser, FaLock } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Quote from "@/mycomponents/Quote";

interface InputState {
  email: string;
  password: string;
  confirmpassword: string;
}

function Register() {
  const navigate = useNavigate();

  const [input, setInput] = useState<InputState>({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      input.email == "" ||
      input.password == "" ||
      input.confirmpassword == ""
    ) {
      alert("please fill the credentials");
    } else {
      if (input.password !== input.confirmpassword) {
        alert("password and confirm password does not match");
      } else {
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
      }
    }
  };


  return (
    <div
      className={twMerge("flex flex-col md:flex-row h-screen overflow-hidden")}
    >
      <div className={twMerge("md:w-1/2 relative")}>
        <img
          className={twMerge("h-full w-full object-cover")}
          src="./images/library.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-center">
          <Quote />
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className={twMerge(
            "border border-gray-300 w-full md:w-3/5 h-7/10 p-6 rounded"
          )}
        >
          <h1 className={twMerge("text-2xl text-center mb-6")}>Register</h1>
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
              <FaUser
                className={twMerge(
                  "absolute right-3 top-1/2 transform -translate-y-1/2"
                )}
              />
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
                className="pwd"
              />
              <FaLock
                className={twMerge(
                  "absolute right-3 top-1/2 transform -translate-y-1/2"
                )}
              />
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
                className="pwd"
              />
              <FaLock
                className={twMerge(
                  "absolute right-3 top-1/2 transform -translate-y-1/2"
                )}
              />
            </div>
          </div>
          <Button type="submit" className={twMerge("w-full mt-6")}>
            Register
          </Button>

          <p
            className={twMerge(
              'mt-6 text-center  relative flex items-center my-4 before:content-[""] before:flex-1 before:border-b before:border-black before:mx-3 after:content-[""] after:flex-1 after:border-b after:border-black after:mx-3'
            )}
          >
            {" "}
            O r
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
