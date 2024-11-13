import axiosInstance from "../axios/axios.instance";
import { IPermission } from "../../../shared/types/permission";
export const setPermissionAPI = async (
  resource: string,
  roleID: string,
  action: string
) => {
  return await axiosInstance.post("/permission/set-permission", {
    resource,
    roleID,
    action,
  });
};

export const getPermissionsAPI = async (roleID: string) => {
  return await axiosInstance.get(`/permission/role-permission/${roleID}`);
};

export const getUserPermissionAPI = async (): Promise<IPermission[]> => {
  const res = await axiosInstance.get("/permission/user-permission");
  return res.data;
};
