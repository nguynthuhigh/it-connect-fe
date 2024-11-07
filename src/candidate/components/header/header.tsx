import React from "react";
import Logo from "../../assets/svg/logo.svg?react";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <div className="w-full h-20 bg-blue-main  fixed z-10">
      <div className="max-w-[1200px] px-4 sm:p-0 mx-auto w-full flex items-center">
        <Link to={"/"}>
          <Logo className="w-15" />
        </Link>
        <div className="text-white font-semibold flex space-x-2 ml-10 ">
          <h1>All Jobs</h1>
          <h1>It Companies</h1>
        </div>
        <Link
          className="ml-auto font-semibold text-sm rounded-full bg-white py-2 px-3 text-blue-main"
          to="/login"
        >
          Sign Up/ Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;
