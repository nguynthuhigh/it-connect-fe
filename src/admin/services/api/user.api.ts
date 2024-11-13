import { DataTypeUser } from "../../../shared/types/user";
import axiosInstance from "../axios/axios.instance";
interface UsersPaginate {
  data: DataTypeUser[];
  pageCount: number;
  total: number;
}
export const getUser = async (
  page: number,
  limit: number
): Promise<UsersPaginate> => {
  const res = await axiosInstance.get(`/user?limit=${limit}&page=${page}`);
  return res.data;
};
