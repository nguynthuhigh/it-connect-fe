import React from "react";
import { Select } from "antd";

interface SkillSelectProps {
  name: string;
  title: string;
  options: { value: string; label: string }[];
}

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

const SkillSelect: React.FC<SkillSelectProps> = ({ name, title, options }) => {
  return (
    <div className="mb-4 w-1/4">
      <label htmlFor={name} className="font-semibold text-gray-main mb-2 block">
        {title}
      </label>
      <Select
        showSearch
        placeholder="Select a skill"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        className="w-full bg-gray-50 h-12 -mt-2" // Thay thế style bằng lớp Tailwind
        options={options}
      />
    </div>
  );
};

export default SkillSelect;
