import axiosInstance from "../../../shared/axios/instance";
export const authAPI = async () => {
  const res = await axiosInstance.get("/api/v1/auth");
  return res.data;
};
