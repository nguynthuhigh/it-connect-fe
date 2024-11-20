import axiosInstance from "../axios/axios.instance";

export interface IGetTransactions {
  data: Transaction[];
  total: number;
  pageCount: number;
}

export interface Transaction {
  transactionID: string;
  type: string;
  amount: number;
  description: string;
  actor: number;
  companyID: number;
  createdAt: string;
  updatedAt: string;
  User: User;
}

export interface User {
  image: string;
  name: string;
  email: string;
}
export const getTransactionsAPI = async (): Promise<IGetTransactions> => {
  const res = await axiosInstance.get(`/api/v1/analysts/transactions`);
  return res.data;
};

export interface IGetDashboard {
  totalApplies: number;
  totalJobs: number;
  balance: number;
  totalTransactions: number;
}

export const getDashboardAPI = async (): Promise<IGetDashboard> => {
  const res = await axiosInstance.get(`/api/v1/analysts/dashboard`);
  return res.data;
};
