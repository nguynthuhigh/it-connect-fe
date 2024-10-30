import axiosInstance from "../../../shared/axios/instance";

export const getRoles = async () => {
  const res = await axiosInstance.get("/api/v1/role/get");
  return res.data;
};
export const getUserRoles = async (userID: string) => {
  const res = await axiosInstance.get(`/api/v1/role/user/${userID}`);
  return res.data;
};
export const setUserRole = async (userID: string, roleID: string) => {
  const res = await axiosInstance.post(`/api/v1/role/set`, { userID, roleID });
  return res.data;
};
