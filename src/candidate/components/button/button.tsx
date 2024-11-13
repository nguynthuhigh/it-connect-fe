import React from "react";
import Loading from "../../assets/svg/loading.svg";
interface ButtonProps {
  name: string;
  isLoading?: boolean;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ name, isLoading, className }) => {
  if (isLoading) {
    return (
      <button
        type="submit"
        disabled
        className={`${className} text-white font-bold rounded-[10px]  bg-gray-100 w-full h-[50px]  text-base`}
      >
        <img src={Loading} className="mx-auto animate-spin"></img>
      </button>
    );
  } else {
    return (
      <button
        type="submit"
        className={`${className} text-white font-bold rounded-md  bg-blue-500 w-full h-[50px]  text-base `}
      >
        {name}
      </button>
    );
  }
};

export default Button;
