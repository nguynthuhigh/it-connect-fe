import React, { useState } from "react";
import { Select } from "antd";
import { z } from "zod";

interface CustomSelectProps {
  name: string;
  title: string;
  options: { value: string; label: string }[];
  onChange: (value: string, name: string) => void;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  title,
  options,
  onChange,
}) => {
  const [error, setError] = useState<string | null>(null);
  const schema = z.object({
    value: z
      .string()
      .min(1, { message: "Please select a value" })
      .refine((val) => options.some((option) => option.value === val), {
        message: "Invalid selection",
      }),
  });

  const onChangeCustom = (value: string) => {
    const result = schema.safeParse({ value });
    if (!result.success) {
      setError(result.error.errors[0].message);
    } else {
      setError(null);
      onChange(value, name);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="font-semibold text-gray-main  block">
        {title}
      </label>
      <Select
        showSearch
        placeholder="Choose location"
        optionFilterProp="label"
        defaultValue={options[0].value}
        onChange={onChangeCustom}
        className="w-full placeholder-[#757575] mt-1 placeholder-[16px] h-[50px]"
        options={options}
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default CustomSelect;
