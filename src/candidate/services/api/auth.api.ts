import axiosInstance from "../axios/axios.instance";
interface ISignIn {
  email: string;
  password: string;
}
export const signIn = async (body: ISignIn) => {
  const res = await axiosInstance.post(`/candidate/auth/sign-in`, body);
  return res.data;
};
export const signUp = async (body: ISignIn) => {
  const res = await axiosInstance.post(`/candidate/auth/sign-up`, body);
  return res.data;
};
interface ISignUp {
  email: string;
  otp: string;
}
export const verifySignUp = async (body: ISignUp) => {
  const res = await axiosInstance.post(`/candidate/auth/verify/sign-up`, body);
  return res.data;
};
export const authAPI = async () => {
  const res = await axiosInstance.get(`/candidate/auth`);
  return res.data;
};
