import React from "react";
import Company from "./company";
import { useQuery } from "@tanstack/react-query";
import { ICompany, getTopCompaniesAPI } from "../../services/api/company.api";

const TopCompany: React.FC = () => {
  const { data } = useQuery<ICompany[]>({
    queryKey: ["top-companies"],
    queryFn: async () => {
      return await getTopCompaniesAPI();
    },
  });
  return (
    <div className="space-y-12 ">
      <h1 className="font-semibold text-4xl text-center">
        Top
        <span className="text-blue-main"> Companies </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 ">
        {data?.map((item: ICompany, index: number) => (
          <Company {...item} key={index}></Company>
        ))}
      </div>
    </div>
  );
};

export default TopCompany;
