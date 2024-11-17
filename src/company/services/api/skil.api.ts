import axiosInstance from "../../../shared/axios/instance";
interface ISkill {
  skillID: number;
  name: string;
}
export const getAllSkill = async (): Promise<ISkill[]> => {
  const res = await axiosInstance.get("/api/v1/admin/skill");
  return res.data;
};
