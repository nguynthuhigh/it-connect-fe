import React from "react";
import Fire from "../../assets/svg/fire.svg?react";
interface JobVariantProps {
  children: React.ReactNode;
  type: string;
}
const JobVariantHome: React.FC<JobVariantProps> = (props) => {
  switch (props?.type?.toLowerCase()) {
    case "hot":
      return (
        <div className=" relative w-full border-[2px]  rounded-[20px] h-full bg-orange-50 border-orange-200">
          {props.children}
          <div className="absolute  top-0 right-0 mt-2">
            <div className=" bg-orange-500 mt-2 text-white py-0.5 px-3 text-[12px] rounded-l-full">
              HOT
            </div>
          </div>
        </div>
      );
    case "super-hot":
      return (
        <div className=" relative  h-full w-full border-[2px]  rounded-[20px] bg-red-50 border-red-200 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
          {props.children}
          <div className="absolute  top-0 right-0 mt-2">
            <div className=" bg-red-500 mt-2 text-white py-0.5 px-3 pl-0 text-[12px] rounded-l-full flex items-center">
              <Fire className="mx-2" />
              SUPER HOT
            </div>
          </div>
        </div>
      );
    case "new":
      return (
        <div className="relative  h-full w-full border-[2px]  rounded-[20px] bg-blue-50 border-blue-200 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer">
          {props.children}
          <div className="absolute  top-0 right-0 mt-4">
            <div className=" bg-blue-500 mt-2 text-white py-0.5 px-3 text-[12px] rounded-l-full">
              NEW
            </div>
          </div>
        </div>
      );
    case "urgent":
      return (
        <div className="relative  h-full w-full border-[2px]  rounded-[20px] bg-blue-50 border-blue-200 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 cursor-pointer">
          {props.children}
          <div className="absolute  top-0 right-0 mt-4">
            <div className=" bg-blue-500 mt-2 text-white py-0.5 px-3 text-[12px] rounded-l-full">
              URGENT
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full  border-[1px]  bg-white rounded-[5px] p-4">
          {props.children}
        </div>
      );
  }
};

export default JobVariantHome;
