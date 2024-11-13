import React from "react";
interface InputProps {
  name: string;
  title: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  type?: string;
}
const Input: React.FC<InputProps> = ({
  name,
  title,
  placeholder,
  className,
  onChange,
  onClick,
  type,
}) => {
  return (
    <div className={`flex-col ${className}`}>
      <label htmlFor={name} className="font-semibold text-gray-main">
        {title}
      </label>
      <input
        type={type}
        required
        name={name}
        onClick={onClick}
        placeholder={placeholder}
        className="border rounded-[4px] mt-1 p-[12px] w-full bg-white"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
