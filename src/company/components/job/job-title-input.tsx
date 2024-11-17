import React from 'react';

interface JobTitleInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const JobTitleInput: React.FC<JobTitleInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job-title">
        Job title
      </label>
      <input
        id="job-title"
        type="text"
        placeholder="Job title..."
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default JobTitleInput;
