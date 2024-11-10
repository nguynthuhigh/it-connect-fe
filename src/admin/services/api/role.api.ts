import axiosInstance from "../../../shared/axios/instance";

export const getRoles = async () => {
  const res = await axiosInstance.get("/api/v1/role/get");
  return res.data;
};
