import React from "react";
import Salary from "../../assets/svg/salary.svg";
import Working from "../../assets/svg/working.svg";
import Location from "../../assets/svg/location.svg";
import JobVariant from "../variant/job-variant";
import SkillVariant from "../variant/skill-variant";
import { Skill } from "../../types/company";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
interface JobInfoProps {
  slug: string;
  type: string;
  title: string;
  description: string;
  experience: string;
  environment: string;
  level: string;
  salary?: number;
  work_type: string;
  special: string;
  is_public: boolean;
  companyID: number;
  name: string;
  logo: string;
  search?: string;
  createdAt: string;
  Skills: Skill[];
}
const JobInfo: React.FC<JobInfoProps> = (props) => {
  return (
    <Link to={`/job/${props.slug}`}>
      <div className="font-inter font-semibold  md:max-w-[full] break-inside-avoid-column mb-5">
        <JobVariant type={props.type}>
          <h1 className="text-sm text-gray-500">
            {formatDistanceToNow(props.createdAt, { addSuffix: true })}
          </h1>
          <h1>{props.title}</h1>
          <div className="flex py-2 items-center">
            <img className="mr-2 w-10 h-10 object-cover" src={props.logo}></img>
            <h1 className="text-gray-500">{props.name}</h1>
          </div>
          <div>
            <ul className="text-sm font-medium">
              <li className="flex">
                <img className="mr-2" src={Salary} alt="salary icon"></img>
                <h1>{props.salary}</h1>
              </li>
              <li className="flex">
                <img className="mr-2" src={Working} alt="work icon"></img>
                <h1>{props.work_type}</h1>
              </li>
              <li className="flex">
                <img className="mr-2" src={Location} alt="location icon"></img>
                <h1>Ho Chi Minh City</h1>
              </li>
            </ul>
          </div>
          <div className="my-2 flex space-x-2">
            {props.Skills.map((item: Skill) => (
              <SkillVariant skill={item.name.toLowerCase()}></SkillVariant>
            ))}
          </div>
          {props.search ? (
            props.type === "super-hot" && (
              <div dangerouslySetInnerHTML={{ __html: props.description }} />
            )
          ) : (
            <div dangerouslySetInnerHTML={{ __html: props.description }} />
          )}
        </JobVariant>
      </div>
    </Link>
  );
};

export default JobInfo;
