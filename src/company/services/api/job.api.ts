import axiosInstance from "../../../shared/axios/instance";
export const postJobAPI = async (body: unknown): Promise<{ message: string }> => {
  const res = await axiosInstance.post("/api/v1/job/create", body);
  return res.data;
};
