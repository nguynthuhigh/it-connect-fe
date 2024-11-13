import React, { useState } from "react";
import { Select } from "antd";
import { z } from "zod";

interface CustomSelectProps {
  name: string;
  title: string;
  options: { value: string; label: string }[];
  onChange: (value: string, name: string) => void;
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
    // Validate the value with Zod
    const result = schema.safeParse({ value });

    if (!result.success) {
      // If validation fails, set the error message
      setError(result.error.errors[0].message);
    } else {
      // If validation passes, clear the error and pass value to onChange
      setError(null);
      onChange(value, name);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="font-semibold text-gray-main mb-2 block">
        {title}
      </label>
      <Select
        showSearch
        placeholder="Choose location"
        optionFilterProp="label"
        defaultValue={options[0].value}
        onChange={onChangeCustom}
        className="w-[300px] bg-gray-50 h-[50px]"
        options={options}
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default CustomSelect;
