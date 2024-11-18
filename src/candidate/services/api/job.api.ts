import axiosInstance from "../axios/axios.instance";

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

export interface Skill {
  skillID: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const getTopJobAPI = async (): Promise<IGetTopJob[]> => {
  const res = await axiosInstance.get(`/candidate/job/top`);
  return res.data;
};
