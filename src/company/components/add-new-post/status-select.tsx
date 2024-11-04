import React from "react";
import { Select } from "antd";

interface StatusSelectProps {
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

const StatusSelect: React.FC<StatusSelectProps> = ({ name, title, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="font-semibold text-gray-main mb-2 block">
        {title}
      </label>
      <Select
        showSearch
        placeholder="Choose status"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        className="w-[300px] bg-gray-50 h-[50px]"
        options={options}
      />
    </div>
  );
};

export default StatusSelect;
