import axiosInstance from "../axios/axios.instance";
export const getRoles = async () => {
  const res = await axiosInstance.get("/role/get");
  return res.data;
};
export const getUserRoles = async (userID: string) => {
  const res = await axiosInstance.get(`/role/user/${userID}`);
  return res.data;
};
export const setUserRole = async (userID: string, roleID: string) => {
  const res = await axiosInstance.post(`/role/set`, { userID, roleID });
  return res.data;
};
