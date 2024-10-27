import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeadRight from "./head-right";

import SearchJob from "../filter/search";
const Header: React.FC = () => {
  return (
    <div className="flex justify-between ">
      <div className="lg:max-w-[58%] w-full">
        <h1 className="text-7xl lg:max-h-[250px] h-full font-bold max-w-[550px] pb-0 mb-0">
          <TypeAnimation
            sequence={["A New Journey the Future Ahead"]}
            wrapper="span"
            speed={60}
            repeat={0}
            cursor={false}
          />
        </h1>
        <SearchJob></SearchJob>
        <div className="mt-5">
          <div>
            <div className="relative">
              <img
                className="w-[40px] rounded-full absolute"
                src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9"
              ></img>
              <img
                className="w-[40px] rounded-full absolute ml-8"
                src="data:image/png;base64,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"
              ></img>
              <img
                className="w-[40px] rounded-full absolute ml-16"
                src="https://play-lh.googleusercontent.com/xOKbvDt362x1uzW-nnggP-PgO9HM4L1vwBl5HgHFHy_n1X3mqeBtOSoIyNJzTS3rrj70=w240-h480-rw"
              ></img>
            </div>
          </div>
          <h1 className="ml-28 pt-2 font-semibold"> 1K+ Companies</h1>
        </div>
      </div>
      <div>
        <HeadRight></HeadRight>
      </div>
    </div>
  );
};

export default Header;
