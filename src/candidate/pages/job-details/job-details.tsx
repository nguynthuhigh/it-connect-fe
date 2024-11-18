import React from "react";
import JobHeader from "../../components/job-details/job-header";
import JobMainContent from "../../components/job-details/job-content";
import CompanySidebar from "../../components/job-details/company-sidebar";
import JobListCompany from "../../components/job-details/job-listcompany";

const JobDetail: React.FC = () => {
  return (
    <div className="container-default flex flex-col md:flex-row bg-[#f6f6f6]">
      <div className="w-full md:w-2/3">
        <JobHeader />
        <JobMainContent />
        <JobListCompany />
      </div>

      <div className="w-full md:w-1/3 h-auto md:h-[435px] p-5 bg-gradient-to-b from-[#78B6FF] to-[#3B95FF]">
        <CompanySidebar />
      </div>  
    </div>
  );
};

export default JobDetail;
