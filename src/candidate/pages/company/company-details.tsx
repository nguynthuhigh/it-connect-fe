import React from "react";
import RecruitmentInfo from "../../components/company/job-info";
import GeneralInfo from "../../components/company/general-info";
import CompanyInfo from "../../components/company/company-info";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CompanyReview from "../../components/company/company-review";
import CompanyLocation from "../../components/company/company-location";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { findCompanyBySlug } from "../../services/api/company.api";
import { Company, Job } from "../../types/company";
import { JOB_STATUS_NAME } from "../../contains/job_status";
const CompanyDetails: React.FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useQuery<Company>({
    queryKey: [`company-${slug}`],
    queryFn: async () => {
      return await findCompanyBySlug(slug ? slug : " ");
    },
  });
  console.log(data);
  if (isLoading) {
    return "...Loading";
  }
  if (!data) {
    return "...NotFound";
  }
  return (
    <div className="bg-gray-50">
      <GeneralInfo {...data}></GeneralInfo>
      <div className="container-default ">
        <Tabs selectedTabClassName="border-b-[2px] border-red-500 text-red-500">
          <TabList className={`flex p-4 font-bold font-inter`}>
            <Tab className={`p-2 cursor-pointer outline-none`}>Overview</Tab>
            <Tab className={`p-2 cursor-pointer outline-none`}>Reviews</Tab>
          </TabList>

          <TabPanel>
            <div className="md:flex justify-between">
              <div className="md:w-[64%]">
                <CompanyInfo {...data}></CompanyInfo>
                <CompanyLocation />
              </div>
              <div className="md:w-[35%] space-y-4">
                {data.Jobs.map((item: Job) => (
                  <RecruitmentInfo
                    {...item}
                    name={data.name}
                    logo={data.logo}
                    type={JOB_STATUS_NAME[item.status].toLowerCase()}
                  ></RecruitmentInfo>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:flex justify-between">
              <CompanyReview></CompanyReview>
              <div className="md:w-[35%] space-y-4">
                {/* <RecruitmentInfo type="hot"></RecruitmentInfo>
                <RecruitmentInfo type="super-hot"></RecruitmentInfo>
                <RecruitmentInfo type="new"></RecruitmentInfo>
                <RecruitmentInfo type="normal"></RecruitmentInfo> */}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CompanyDetails;
