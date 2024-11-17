import React, { useState } from "react";
import Input from "../../../shared/components/input-pattern/input";
import DescriptionJob from "../../components/input/description";
import { Select, Space } from "antd";
import CustomSelect from "../../components/input/select";
import { useQuery } from "@tanstack/react-query";
import { getAllSkill } from "../../services/api/skil.api";
interface ISkill {
  skillID: number;
  name: string;
}
interface IJob {
  title: string;
  description: string;
  experience: string;
  environment: string;
  level: string;
  salary: string;
  work_type: string;
  special: string;
  is_public: boolean;
  status?: number;
  skills: number[];
}
const P: React.FC = () => {
  const [jobData, setJobData] = useState<IJob>({
    title: "",
    description: "",
    experience: "",
    environment: "",
    level: "",
    salary: "",
    work_type: "",
    special: "",
    is_public: true,
    status: undefined,
    skills: [],
  });
  const { data } = useQuery<ISkill[]>({
    queryKey: ["skills"],
    queryFn: () => getAllSkill(),
  });
  const convertNamesToSkillIDs = (
    names: string[],
    options?: ISkill[]
  ): number[] => {
    return names
      .map((name) => {
        const option = options?.find((option) => option.name === name);
        return option ? option.skillID : null;
      })
      .filter((skillID): skillID is number => skillID !== null);
  };

  const handleChange = (names: string[]) => {
    const skillIDs = convertNamesToSkillIDs(names, data);
    setJobData({ ...jobData, skills: skillIDs });
    console.log(jobData);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
    console.log(jobData);
  };
  const handleChangeCustom = (html: string, name: string) => {
    setJobData({ ...jobData, [name]: html });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(jobData);
  };
  return (
    <form onSubmit={onSubmit} className="bg-white ">
      <h1 className="text-black font-bold text-[30px] mb-6">Post New Job</h1>
      <div className="flex justify-between mb-6 gap-5">
        <Input
          placeholder="Senior Nodejs...."
          name="title"
          title="Job title"
          className="w-full"
          onChange={handleInputChange}
        ></Input>
        <div>
          <label
            htmlFor={"skill"}
            className="font-semibold text-gray-main mb-4"
          >
            Select skills
          </label>
          <Select
            mode="multiple"
            style={{ width: "500px", height: 50, marginTop: 4 }}
            className="w-[500px]"
            placeholder="Select skills"
            onChange={handleChange}
            options={data}
            optionRender={(option) => (
              <Space>
                <span>{option.label}</span>
              </Space>
            )}
            maxCount={3}
            fieldNames={{
              label: "name",
              value: "name",
            }}
          />
        </div>
      </div>
      <div className="flex gap-5">
        <CustomSelect
          name="work_type"
          title="Work type"
          onChange={handleChangeCustom}
          options={[
            { value: "Full-time", label: "Full-time" },
            { value: "Part-time", label: "Part-time" },
            { value: "Freelance", label: "Freelance" },
            { value: "Contract", label: "Contract" },
            { value: "Internship", label: "Internship" },
            { value: "Remote", label: "Remote" },
            { value: "Temporary", label: "Temporary" },
            { value: "Volunteer", label: "Volunteer" },
          ]}
        />
        <CustomSelect
          name="level"
          title="Level"
          onChange={handleChangeCustom}
          options={[
            { value: "Junior", label: "Junior" },
            { value: "Mid-level", label: "Mid-level" },
            { value: "Senior", label: "Senior" },
            { value: "Lead", label: "Lead" },
            { value: "Manager", label: "Manager" },
          ]}
        />
        <CustomSelect
          name="status"
          title="Boost job"
          onChange={handleChangeCustom}
          options={[
            { value: "0", label: "Normal" },
            { value: "1", label: "Popular - 100 $ITC" },
            { value: "2", label: "Urgent - 200 $ITC" },
            { value: "3", label: "Hot - 300 $ITC" },
            { value: "4", label: "Super hot - 400 $ITC" },
            { value: "5", label: "Exclusive - 500 $ITC" },
            { value: "6", label: "Limit time - 600 $ITC" },
          ]}
        />
      </div>
      <div className="flex items-center gap-5 mb-6">
        <Input
          placeholder="5.000.000đ"
          name="Salary"
          title="Salary"
          className="w-[300px]"
        ></Input>
        <div className="flex items-center">
          <label className="text-sm font-medium text-gray-main"></label>
          <div className="flex items-center mt-5 space-x-4">
            <label className="flex items-center gap-2 text-gray-main">
              Public
              <input
                type="radio"
                name="visibility"
                value="public"
                className="mr-2"
              />
            </label>
            <label className="flex items-center gap-2 text-gray-main">
              Private
              <input
                type="radio"
                name="visibility"
                value="private"
                className="mr-2"
              />
            </label>
          </div>
        </div>
      </div>
      <DescriptionJob
        name="description"
        onChange={handleChangeCustom}
        value={jobData.description}
        title="Job Description"
      ></DescriptionJob>
      <DescriptionJob
        name="special"
        onChange={handleChangeCustom}
        value={jobData.special}
        title="Job Top 3 Reasons"
      ></DescriptionJob>
      <DescriptionJob
        name="experience"
        onChange={handleChangeCustom}
        value={jobData.experience}
        title="Your skill and experience"
      ></DescriptionJob>
      <DescriptionJob
        name="environment"
        onChange={handleChangeCustom}
        value={jobData.environment}
        title="Why you'll love working here"
      ></DescriptionJob>
      <div className="flex items-center justify-end mt-5 mr-3 space-x-4">
        <label className="flex items-center gap-2 text-gray-main">
          Public
          <input
            type="radio"
            name="visibility"
            value="public"
            className="mr-2"
          />
        </label>
        <label className="flex items-center gap-2 text-gray-main">
          Private
          <input
            type="radio"
            name="visibility"
            value="private"
            className="mr-2"
          />
        </label>
      </div>
      <div className="flex justify-end space-x-4 mt-5">
        <button
          className="bg-[#0094df] hover:bg-[#007bdf] text-white font-bold py-3 px-20 rounded-full focus:outline-none focus:shadow-"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default P;
