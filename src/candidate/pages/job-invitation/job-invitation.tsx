
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobInfo from '../../components/company/job-info';
import Pagination from '../../components/job-invitation/pagination';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  work_type: string;
  type: string;
  description: string;
  experience: string;
  environment: string;
  level: string;
  special: string;
  is_public: boolean;
  author: string;
  companyID: number;
  name: string;
  logo: string;
  Skills: [];  
}

const JobInvitationTabs: React.FC = () => {
  const [pendingJobs, setPendingJobs] = useState<Job[]>([]);
  const [acceptedJobs, setAcceptedJobs] = useState<Job[]>([]);
  const [expiredJobs, setExpiredJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  

  const renderJobs = (jobs: Job[]) => {
    const start = (currentPage - 1) * itemsPerPage;
    const currentJobs = jobs.slice(start, start + itemsPerPage);

    return (
      <>
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <JobInfo
              key={job.id}
              type={job.type}
              title={job.title}
              description={job.description}
              experience={job.experience}
              environment={job.environment}
              level={job.level}
              // salary={job.salary}
              work_type={job.work_type}
              special={job.special}
              is_public={job.is_public}
              companyID={job.companyID}
              name={job.company}
              logo={job.logo}
              Skills={job.Skills} 
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center text-gray-500 text-xl">
            <img
              src="https://itviec.com/assets/everything-empty-62c813bcb84be8a092033e40550b6fdc9f6bda05947d60c619b2a74906144f8b.svg"
              alt="Empty Folder"
              className="w-36 h-36 mb-4"
            />
            <p>You have 0 Pending Invitations</p>
          </div>
        )}
        <Pagination
          totalItems={jobs.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="text-3xl font-bold mb-6 ml-20 mt-8">Job Invitation</h2>
      <p className="text-black-600 mb-6 ml-20">
        ITviec provides a service that connects anonymous candidates with suitable job opportunities.
      </p>
      <Tabs>
        <TabList className="flex space-x-6 border-b border-gray-300 mb-4 ml-20">
          <Tab
            className="font-semibold text-gray-700 pb-2 text-xl"
            selectedClassName="text-red-500 border-b-2 border-red-500"
          >
            Pending ({pendingJobs.length})
          </Tab>
          <Tab
            className="font-semibold text-gray-700 pb-2 text-xl"
            selectedClassName="text-red-500 border-b-2 border-red-500"
          >
            Accepted ({acceptedJobs.length})
          </Tab>
          <Tab
            className="font-semibold text-gray-700 pb-2 text-xl"
            selectedClassName="text-red-500 border-b-2 border-red-500"
          >
            Expired ({expiredJobs.length})
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex items-center justify-between mt-2 mr-10 mb-10">
            <span className="text-gray-500 text-0.5xl ml-20 text-0.5xl">
              This tab stores valid invitations, where you can review job details and decide to share your CV.
            </span>
            <label className="flex items-center">
              <span className="mr-2 text-gray-700 font-medium">Sort by:</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-gray-700">
                <option value="ascending">Expiration time: Ascending</option>
                <option value="descending">Expiration time: Descending</option>
              </select>
            </label>
          </div>
          {renderJobs(pendingJobs)}
        </TabPanel>

        <TabPanel>
          <div className="flex items-center justify-between mt-2 mr-10 mb-10">
            <span className="text-gray-500 text-0.5xl ml-20 text-0.5xl">
              This tab keeps track of invitations you’ve agreed to share your CV for, and the employer will contact you soon.
            </span>
            <label className="flex items-center">
              <span className="mr-2 text-gray-700 font-medium">Sort by:</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-gray-700">
                <option value="ascending">Start Date: Ascending</option>
                <option value="descending">Start Date: Descending</option>
              </select>
            </label>
          </div>
          {renderJobs(acceptedJobs)}
        </TabPanel>

        <TabPanel>
          <div className="flex items-center justify-between mt-2 mr-10 mb-10">
            <span className="text-gray-500 text-0.5xl ml-20">
              This tab holds invitations that have lapsed.
            </span>
            <label className="flex items-center">
              <span className="mr-2 text-gray-700 font-medium">Sort by:</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-gray-700">
                <option value="ascending">Expiration time: Ascending</option>
                <option value="descending">Expiration time: Descending</option>
              </select>
            </label>
          </div>
          {renderJobs(expiredJobs)}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobInvitationTabs;

