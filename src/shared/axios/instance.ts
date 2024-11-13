import axios from "axios";
import { getCookie } from "../utils/cookie";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + getCookie("at-adm"),
  },
});
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      // window.location.href = window.location.origin;
      console.log(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
