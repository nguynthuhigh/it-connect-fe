import React from "react";
interface InputProps {
  name: string;
  title: string;
  placeholder: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  title,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <div className={`flex-col ${className}`}>
      <label htmlFor={name} className="font-semibold text-gray-main">
        {title}
      </label>
      <input
        required
        name={name}
        placeholder={placeholder}
        className="border rounded-[4px] mt-1 p-[12px] w-full bg-white"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
