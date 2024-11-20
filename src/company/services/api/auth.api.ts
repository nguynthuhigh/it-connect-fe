import axiosInstance from "../axios/axios.instance";

export interface IUser {
  userID: number;
  email: string;
  name: string;
  status: string;
  image: string;
  address: string;
  cv: string;
  dob: string;
  gender: string;
  companyID: number;
  roleCompany: string;
  createdAt: string;
  updatedAt: string;
  Company: ICompany;
}

export interface ICompany {
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
  balance: number;
  rating: number;
  followers: number;
  createdAt: string;
  updatedAt: string;
}

export const authAPI = async (): Promise<IUser> => {
  const res = await axiosInstance.get("/api/v1/company/auth");
  return res.data;
};
