import React from "react";
import SkillVariant from "../variant/skill-variant";
import Star from "../../assets/svg/star.svg";
import Location from "../../assets/svg/location.svg";
import { Link } from "react-router-dom";
const skills = [
  {
    slug: "nodejs",
    name: "b",
  },
  {
    slug: "java",
    name: "b",
  },
  {
    slug: "python",
    name: "b",
  },
];
interface CompanyProps {
  companyID: number;
  slug: string;
  name: string;
  description: string;
  skill_description: string;
  industry: string;
  logo: string;
  website: string;
  address: string;
  working_day: string;
  size: string;
  ot_policy: string;
  rating: number;
  followers: number;
  createdAt: string;
  updatedAt: string;
}
const Company: React.FC<CompanyProps> = ({
  name,
  industry,
  rating,
  description,
  address,
  logo,
  slug,
}) => {
  return (
    <Link to={`company/${slug}`}>
      <div className="w-full h-full font-in cursor-pointer pb-6 bg-white rounded-[25px] p-4 space-y-3 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
        <div className="flex items-center">
          <img className="w-[70px] h-[70px] rounded-[20px]" src={logo}></img>
          <div className="font-semibold ml-4">
            <h1 className="text-2xl">{name}</h1>
            <h1>{industry}</h1>
          </div>
          <div className="ml-auto flex items-center">
            <h1 className="font-bold text-xl mr-2">{rating}</h1>
            <img src={Star}></img>
          </div>
        </div>
        {/* <div className="flex space-x-3">
          {skills.map((item) => (
            <SkillVariant skill={item.slug}></SkillVariant>
          ))}
        </div> */}
        <div
          className="overflow-hidden text-ellipsis whitespace-nowrap max-h-[200px] h-full"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex mt-auto justify-between font-semibold  h-[20px]">
          <div className="flex space-x-2">
            <img src={Location}></img>
            <h1 className="overflow-hidden text-ellipsis">{address}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Company;
