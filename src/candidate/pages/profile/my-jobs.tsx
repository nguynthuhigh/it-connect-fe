import React, {useState} from 'react';
import SavedJobs from '../../components/my-jobs/saved-jobs';
const MyJobs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabStyle = (tabIndex: number) => `
    py-4 px-4 focus:outline-none font-semibold transition-colors duration-300 
    ${activeTab === tabIndex 
      ? 'text-blue-600 border-b-2 border-blue-600' 
      : 'text-gray-600 hover:text-blue-500'}`;
  return (
    <div className="w-full flex justify-center items-center min-h-[77vh] py-10">
      <div className="w-full max-w-7xl">
        <div className="mb-6 flex space-x-6 border-b">
          <button 
            onClick={() => setActiveTab(0)} 
            className={tabStyle(0)}
          >
            Saved Jobs
          </button>
          <button 
            onClick={() => setActiveTab(1)} 
            className={tabStyle(1)}
          >
            Applied Jobs
          </button>
        </div>
        {activeTab === 0 && (
          <SavedJobs/>
        )}
        {activeTab === 1 && (
          <div className="w-full max-w-7xl p-6 bg-white shadow-xl rounded-lg">
            <p>No applied jobs yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;