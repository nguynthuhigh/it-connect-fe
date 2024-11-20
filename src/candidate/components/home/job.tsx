import React from "react";
import Salary from "../../assets/svg/salary.svg";
import WorkType from "../../assets/svg/working.svg";
import Location from "../../assets/svg/location.svg";
import JobVariantHome from "../variant/job-variant-home";
import { Link } from "react-router-dom";
import { JOB_STATUS_NAME } from "../../contains/job_status";
import { formatDistanceToNow } from "date-fns";
import { Company, Skill } from "../../services/api/job.api";
interface JobProps {
  jobID: number;
  slug: string;
  title: string;
  description: string;
  level: string;
  salary: number;
  is_public_salary: boolean;
  work_type: string;
  special: string;
  is_public: boolean;
  status: number;
  companyID: number;
  createdAt: string;
  updatedAt: string;
  Skills: Skill[];
  Company: Company;
}

const Job: React.FC<JobProps> = ({
  slug,
  title,
  salary,
  work_type,
  description,
  status,
  createdAt,
  Company,
}) => {
  return (
    <Link to={`/job/${slug}`}>
      <JobVariantHome type={JOB_STATUS_NAME[status]}>
        <div className="h-[88%] space-y-2 p-4 ">
          <div className="flex font-semibold items-center">
            <img
              className="w-[40px h-[40px] rounded-lg"
              src={Company.logo}
            ></img>
            <div className="ml-2">
              <h1 className="text-gray-500">{Company.name}</h1>
              <div>
                <h1 className="truncate w-[210px]">{title}</h1>
              </div>
            </div>
          </div>
          <div className="font-semibold text-sm">
            <div className="flex items-center">
              <img src={Salary}></img>
              <h1 className="ml-2">Up to {salary}</h1>
            </div>
            <div className="flex items-center">
              <img src={WorkType}></img>
              <h1 className="ml-2">{work_type}</h1>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 font-semibold">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </p>
        </div>
        <div className="bg-white flex justify-between p-2 rounded-b-[20px] text-sm font-semibold">
          <div className="flex space-x-1">
            <img src={Location}></img>
            <h1>Ho Chi Minh City</h1>
          </div>
          <h1 className="text-blue-main">
            {formatDistanceToNow(createdAt, { addSuffix: true })}
          </h1>
        </div>
      </JobVariantHome>
    </Link>
  );
};

export default Job;
