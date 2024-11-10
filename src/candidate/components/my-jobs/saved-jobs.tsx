import React from "react";
import { useNavigate } from "react-router-dom"; 
import Company from "../home/company"; 

const SavedJobs: React.FC = () => {
  const navigate = useNavigate();
  const savedJobs = Array(6).fill(null);
  const handleCompanyClick = () => {
    navigate("/company"); 
  };

  return (
    <div className="w-full max-w-7xl p-6 bg-white shadow-xl rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
      {savedJobs.map((_, index) => (
          <div 
            key={index} 
            onClick={handleCompanyClick} 
            className="cursor-pointer"
          >
            <Company />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;
