import React, { useState } from "react";
import Location from "../../assets/svg/location-blue.svg?react";
import { Link } from "react-router-dom";
const SearchJob: React.FC = () => {
  const [keyword, setKeyword] = useState<string>();
  return (
    <div>
      <div className="h-[80px] w-full bg-blue-extra flex rounded-full font-semibold items-center p-4">
        <div className="flex">
          <Location className="mx-3" />
          <select className="bg-blue-extra outline-none" defaultValue={""}>
            <option>Ho Chi Minh</option>
            <option>Da Nang</option>
            <option>Ha Noi</option>
          </select>
        </div>
        <div className=" border-l-[2px] border-gray-300 h-full mx-2"></div>
        <input
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          placeholder="Search jobs"
          className="w-[50%] pl-2 text-lg bg-blue-extra outline-none"
        ></input>
        <Link
          to={`/search?keyword=${keyword}`}
          className="w-fit h-fit px-6 text-sm py-3 bg-blue-main rounded-full text-white ml-auto"
        >
          Find Jobs
        </Link>
      </div>
    </div>
  );
};

export default SearchJob;
