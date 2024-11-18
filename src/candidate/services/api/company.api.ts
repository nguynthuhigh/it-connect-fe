import axiosInstance from "../axios/axios.instance";
export const findCompanyBySlug = async (slug: string) => {
  const res = await axiosInstance.get(`/candidate/company/${slug}`);
  return res.data;
};

export const registerCompanyAPI = async (
  body: unknown
): Promise<{ message: string }> => {
  const res = await axiosInstance.post(`/candidate/company/register`, body);
  return res.data;
};

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
  rating: number;
  followers: number;
  createdAt: string;
  updatedAt: string;
}

export const getTopCompaniesAPI = async (): Promise<ICompany[]> => {
  const res = await axiosInstance.get(`/candidate/company/top`);
  return res.data;
};
