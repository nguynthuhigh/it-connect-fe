import axiosInstance from "../axios/axios.instance";
export const findCompanyBySlug = async (slug: string) => {
  const res = await axiosInstance.get(`/candidate/company/${slug}`);
  return res.data;
};

export const registerCompanyAPI = async (body: unknown) => {
  const res = await axiosInstance.post(`/candidate/company/register`, body);
  return res.data;
};
