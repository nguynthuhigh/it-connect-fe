import React from "react";
import LocationCompany from "../../assets/svg/location_company.svg";
import Connect from "../../assets/svg/connect.svg";
interface GeneralInfoProps {
  name: string;
  address: string;
  // followers: number;
  logo: string;
}
const GeneralInfo: React.FC<GeneralInfoProps> = ({ name, address, logo }) => {
  return (
    <div className=" py-10  bg-[#78B6FF] text-white">
      <div className="max-w-[1250px] px-4 mx-auto font-semibold font-inter  md:flex items-center">
        <div>
          <img className="w-[200px] mx-auto" src={logo}></img>
        </div>
        <div className="ml-4 flex-col justify-between">
          <h1 className="text-4xl max-md:text-center">{name}</h1>
          <div className="mt-5 flex max-md:mx-auto w-fit">
            <div className="flex">
              <img
                className="mr-2"
                src={LocationCompany}
                alt="Location icon"
              ></img>
              <h1>{address}</h1>
            </div>
            <div className="flex ml-6">
              <img className="mr-2" src={Connect} alt="Location icon"></img>
              <h1>600.000 Followers</h1>
            </div>
          </div>
          <div className="mt-5 space-x-5 max-md:mx-auto w-fit">
            <button className="p-3 border border-white rounded-lg">
              Write review
            </button>
            <button className="p-3 border border-white rounded-lg">
              Follow Company
            </button>
          </div>
        </div>
        <div className="ml-auto max-md:mx-auto max-md:mt-5 w-[150px] h-[50px] bg-[#9FD7FF] rounded-lg"></div>
      </div>
    </div>
  );
};

export default GeneralInfo;
