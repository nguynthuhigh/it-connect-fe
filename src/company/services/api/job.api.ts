import axiosInstance from "../axios/axios.instance";
export const postJobAPI = async (
  body: unknown
): Promise<{ message: string }> => {
  const res = await axiosInstance.post("/api/v1/job/create", body);
  return res.data;
};
export interface IGetJob {
  data: Job[];
  pageCount: number;
  total: number;
}

export interface Job {
  jobID: number;
  slug: string;
  title: string;
  description: string;
  experience: string;
  environment: string;
  level: string;
  salary: number;
  is_public_salary: boolean;
  work_type: string;
  special: string;
  is_public: boolean;
  author: number;
  status: number;
  companyID: number;
  createdAt: string;
  updatedAt: string;
}

export const getJobsAPI = async ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}): Promise<IGetJob> => {
  const res = await axiosInstance.get(
    `/api/v1/job?page=${page}&limit=${limit}`
  );
  return res.data;
};
