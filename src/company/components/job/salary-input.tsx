import React from 'react';

interface SalaryInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SalaryInput: React.FC<SalaryInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
        Salary
      </label>
      <input
        id="salary"
        type="text"
        placeholder="Salary"
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default SalaryInput;
