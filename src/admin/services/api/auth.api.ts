import axiosInstance from "../axios/axios.instance";
export const authAPI = async () => {
  const res = await axiosInstance.get("/auth");
  return res.data;
};
interface ISignIn {
  email: string;
  password: string;
}
export const signInAPI = async (body: ISignIn) => {
  const res = await axiosInstance.post("/sign-in", body);
  return res.data;
};
