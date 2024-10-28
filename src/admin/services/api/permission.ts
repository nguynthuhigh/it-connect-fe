import axiosInstance from "../../../shared/axios/instance";
import { IPermission } from "../../../shared/types/permission";
export const setPermissionAPI = async (
  resource: string,
  roleID: string,
  action: string
) => {
  return await axiosInstance.post("/api/v1/permission/set-permission", {
    resource,
    roleID,
    action,
  });
};

export const getPermissionsAPI = async (roleID: string) => {
  return await axiosInstance.get(
    `/api/v1/permission/role-permission/${roleID}`
  );
};

export const getUserPermissionAPI = async (): Promise<IPermission[]> => {
  const res = await axiosInstance.get("/api/v1/permission/user-permission");
  return res.data;
};
