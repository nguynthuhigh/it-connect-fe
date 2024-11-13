import axiosInstance from "../axios/axios.intance";
interface ISignIn {
  email: string;
  password: string;
}
export const signIn = async (body: ISignIn) => {
  const res = await axiosInstance.post(`/auth/sign-in`, body);
  return res.data;
};
export const signUp = async (body: ISignIn) => {
  const res = await axiosInstance.post(`/auth/sign-up`, body);
  return res.data;
};
interface ISignUp {
  email: string;
  otp: string;
}
export const verifySignUp = async (body: ISignUp) => {
  const res = await axiosInstance.post(`/auth/verify/sign-in`, body);
  return res.data;
};
