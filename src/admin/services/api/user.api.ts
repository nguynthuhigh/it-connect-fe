import axiosInstance from "../../../shared/axios/instance";
import { DataTypeUser } from "../../../shared/types/user";

export const getUser = async (): Promise<DataTypeUser[]> => {
  const res = await axiosInstance.get("/api/v1/user");
  return res.data;
};
