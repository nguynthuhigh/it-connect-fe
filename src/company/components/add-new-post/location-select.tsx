import React from "react";
import { Select } from "antd";

interface LocationSelectProps {
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

const LocationSelect: React.FC<LocationSelectProps> = ({ name, title, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="font-semibold text-gray-main mb-2 block">
        {title}
      </label>
      <Select
        showSearch
        placeholder="Select a location"
        optionFilterProp="label"
        onChange={onChange}
        onSearch={onSearch}
        className="w-full bg-gray-50 h-12" // Sử dụng lớp h-12 để tăng chiều cao
        options={options}
      />
    </div>
  );
};

export default LocationSelect;
