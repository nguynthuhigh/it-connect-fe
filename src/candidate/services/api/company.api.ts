import axiosInstance from "../axios/axios.intance";
export const findCompanyBySlug = async (slug: string) => {
  const res = await axiosInstance.get(`/candidate/company/${slug}`);
  return res.data;
};
