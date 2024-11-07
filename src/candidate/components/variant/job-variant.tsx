import React from "react";
import Fire from "../../assets/svg/fire.svg?react";
interface JobVariantProps {
  children: React.ReactNode;
  type: string;
}
const JobVariant: React.FC<JobVariantProps> = (props) => {
  switch (props.type) {
    case "hot":
      return (
        <div className="w-full relative border-[2px] bg-orange-50 border-orange-200 rounded-[5px] p-4 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer">
          {props.children}
          <div className="absolute  top-0 right-0 mt-2">
            <div className=" bg-orange-500  text-white py-0.5 px-3 text-[12px] rounded-l-full">
              HOT
            </div>
          </div>
        </div>
      );
    case "super-hot":
      return (
        <div className="w-full relative border-[2px] bg-red-50 border-red-200 rounded-[5px] p-4 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer">
          {props.children}
          <div className="absolute  top-0 right-0 mt-2">
            <div className=" bg-red-500  text-white py-0.5 px-3 pl-0 text-[12px] rounded-l-full flex items-center">
              <Fire className="mx-2" />
              SUPER HOT
            </div>
          </div>
        </div>
      );
    case "urgent":
      return (
        <div className="w-full relative border-[2px] bg-blue-50 border-blue-200 rounded-[5px] p-4 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer">
          {props.children}
          <div className="absolute  top-0 right-0 mt-2">
            <div className=" bg-blue-500  text-white py-0.5 px-3 text-[12px] rounded-l-full">
              URGENT
            </div>
          </div>
        </div>
      );
    case "popular":
      return (
        <div className="w-full relative border-[2px] bg-indigo-50 border-indigo-200 rounded-[5px] p-4 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer">
          {props.children}
          <div className="absolute  top-0 right-0 mt-2">
            <div className=" bg-indigo-500  text-white py-0.5 px-3 text-[12px] rounded-l-full">
              POPULAR
            </div>
          </div>
        </div>
      );
    case "exclusive":
      return (
        <div className="w-full relative border-[2px] bg-pink-50 border-pink-200 rounded-[5px] p-4 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer">
          {props.children}
          <div className="absolute  top-0 right-0 mt-2">
            <div className=" bg-pink-500  text-white py-0.5 px-3 text-[12px] rounded-l-full">
              EXCLUSIVE
            </div>
          </div>
        </div>
      );
    case "limited-time":
      return (
        <div className="w-full relative border-[2px] bg-yellow-50 border-yellow-200 rounded-[5px] p-4 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer">
          {props.children}
          <div className="absolute  top-0 right-0 mt-2">
            <div className=" bg-yellow-500  text-white py-0.5 px-3 text-[12px] rounded-l-full">
              LIMITED TIME
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full  border-[1px]  bg-white rounded-[5px] p-4 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer">
          {props.children}
        </div>
      );
  }
};

export default JobVariant;
