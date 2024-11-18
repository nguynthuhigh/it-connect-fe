import React from "react";
import Job from "./job";
import { useQuery } from "@tanstack/react-query";
import { getTopJobAPI, IGetTopJob } from "../../services/api/job.api";
const TopJob: React.FC = () => {
  const { data } = useQuery<IGetTopJob[]>({
    queryKey: ["top-jobs"],
    queryFn: async () => {
      return await getTopJobAPI();
    },
  });
  console.log(data);
  return (
    <div className="space-y-12">
      <h1 className="font-semibold text-4xl text-center">
        Top
        <span className="text-blue-main"> Jobs </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.map((item: IGetTopJob, key: number) => (
          <Job key={key} {...item}></Job>
        ))}
      </div>
    </div>
  );
};

export default TopJob;
