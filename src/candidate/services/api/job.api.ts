import axiosInstance from "../axios/axios.instance";
import { Skill } from "../../types/company";
export interface IGetTopJob {
  jobID: number;
  slug: string;
  title: string;
  description: string;
  experience: string;
  environment: string;
  level: string;
  salary: number;
  is_public_salary: boolean;
  work_type: string;
  special: string;
  is_public: boolean;
  author: number;
  status: number;
  companyID: number;
  createdAt: string;
  updatedAt: string;
  Skills: Skill[];
  Company: Company;
}
export interface Company {
  slug: string;
  name: string;
  logo: string;
  industry: string;
  website: string;
  address: string;
  rating: number;
}

export const getTopJobAPI = async (): Promise<IGetTopJob[]> => {
  const res = await axiosInstance.get(`/candidate/job/top`);
  return res.data;
};
export interface IJob {
  jobID: number;
  slug: string;
  title: string;
  description: string;
  experience: string;
  environment: string;
  level: string;
  salary: number;
  is_public_salary: boolean;
  work_type: string;
  special: string;
  is_public: boolean;
  author: number;
  status: number;
  companyID: number;
  createdAt: string;
  updatedAt: string;
  Skills: Skill[];
  Company: Company;
}

export interface Company {
  companyID: number;
  slug: string;
  name: string;
  description: string;
  skill_description: string;
  industry: string;
  logo: string;
  website: string;
  address: string;
  working_day: string;
  size: string;
  ot_policy: string;
  rating: number;
  followers: number;
  createdAt: string;
  updatedAt: string;
}

export const getJobBySlugAPI = async (slug: string): Promise<IJob> => {
  const res = await axiosInstance.get(`/candidate/job/${slug}`);
  return res.data;
};
export const applyJobAPI = async (
  formData: FormData
): Promise<{ message: string }> => {
  const res = await axiosInstance.post(`/candidate/job/apply`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
export interface Jobs {
  jobID: number;
  slug: string;
  title: string;
  description: string;
  experience: string;
  environment: string;
  level: string;
  salary: number;
  is_public_salary: boolean;
  work_type: string;
  special: string;
  is_public: boolean;
  author: number;
  status: number;
  companyID: number;
  createdAt: string;
  updatedAt: string;
  Skills: Skill[];
  Company: Company;
}

export const searchJobAPI = async (keyword: string): Promise<Jobs[]> => {
  const res = await axiosInstance.get(
    `/candidate/job/search?keyword=${keyword}`
  );
  return res.data;
};
