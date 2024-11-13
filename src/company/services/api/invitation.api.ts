import axiosInstance from "../../../shared/axios/instance";
interface ISkill {
  skillID: number;
  name: string;
}
export const getApplyJob = async (): Promise<ISkill[]> => {
  const res = await axiosInstance.get("/api/v1/skill");
  return res.data;
};
