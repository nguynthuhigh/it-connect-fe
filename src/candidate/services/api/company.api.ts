import axiosInstance from "../../../shared/axios/instance";

export const findCompanyBySlug = async (slug: string) => {
  const res = await axiosInstance.get(`/api/v1/candidate/company/${slug}`);
  return res.data;
};
