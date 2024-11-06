import React, { useState } from "react";
import visibleIcon from "../../assets/png/visible_eye.png";
import invisibleIcon from "../../assets/png/invisible_eye.png";
// import {z} from 'zod'

const Login: React.FC = () => {


  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen font-inter flex justify-center items-start mt-32">
      <div className="max-w-md w-full space-y-3">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-[40px] font-bold">Welcome back!</h1>
        </div>
        <div>
          <label className="text-[20px] font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="block w-full h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="pt-3 relative">
          <label className="text-[20px] font-semibold">
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            className="block w-full h-[60px] border rounded-md border-[#BDBDBD] focus:border-[#0094df] focus:outline-none focus:ring-2 hover:ring-1 px-3 mt-1"
            placeholder="Enter password"
          />
          <img
            src={showPassword ? visibleIcon : invisibleIcon}
            alt="Toggle Password Visibility"
            className="absolute inset-y-2 right-0 pr-4 h-5 w-9 mt-[58px] cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
        <div className="mt-3 py-1">
          <a
            href=""
            className="text-[#0075FF] text-[20px] flex items-center justify-end font-medium"
          >
            Forgotten password
          </a>
        </div>
        <div className="mt-3  flex items-center justify-center">
          <button className=" text-white font-bold rounded-[15px] bg-blue-main w-full h-[60px] text-lg">
            Sign In
          </button>
        </div>
        <div className="text-center pt-2">
          <p className="text-[20px] text-gray-600 ">
            Do not have an account?{" "}
            <a
              href="/register"
              className="text-blue-main font-semibold"
            >
              Sign up
            </a>
          </p>
        </div>
        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-[#BDBDBD]"></div>
          <span className="mx-8 text-[20px]">Or</span>
          <div className="flex-grow border-t border-[#BDBDBD]"></div>
        </div>
        <div className="">
          <a
            href="https://sso-pointer.vercel.app/authorize?clientId=66f38b1441aea9e24920e456"
            type="button"
            className=" w-full border-[2px] border-[#4285F4] text-[#4285F4] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
          >
            <img
              alt="pointer logo"
              className={
                "mr-2 -ml-1 w-6 h-6 border-white border rounded-full"
              }
              src="https://i.imgur.com/5cYzRrm.png"
            />
            Sign in with Pointer<div></div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
