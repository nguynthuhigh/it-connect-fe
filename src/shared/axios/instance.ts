import axios from "axios";
import { getCookie } from "../utils/cookie";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 1000,
  headers: {
    Authorization: "Bearer " + getCookie("at"),
  },
});

export default axiosInstance;
