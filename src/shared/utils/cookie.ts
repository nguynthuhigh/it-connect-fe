import Cookies from "universal-cookie";
const cookie = new Cookies();
export const getCookie = (key: string) => {
  const token = cookie.get(key);
  return token;
};
