import React, { useEffect } from "react";
import JobHeader from "../../components/job/job-header";
import JobMainContent from "../../components/job/job-content";
import CompanySidebar from "../../components/job/company-sidebar";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { getJobBySlugAPI, IJob } from "../../services/api/job.api";

const JobDetail: React.FC = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { data } = useQuery<IJob>({
    queryKey: ["job", slug],
    queryFn: async () => {
      return await getJobBySlugAPI(slug as string);
    },
  });
  return (
    <div className="container-default pt-0">
      <div className="md:flex bg-gradient-to-b from-[#78B6FF] to-[#3B95FF]">
        {data && (
          <>
            <JobHeader {...data} />
            <CompanySidebar {...data.Company} />
          </>
        )}
      </div>
      <div className="w-full md:w-2/3">
        {data && <JobMainContent {...data} />}
      </div>
    </div>
  );
};

export default JobDetail;
