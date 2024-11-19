import { useQuery } from "@tanstack/react-query";
import { getApplyJobAPI, IJobDetails } from "../services/api/job.api";

export const useJobApplications = (
  slug: string,
  pagination: { current: number; limit: number },
  status?: string
) => {
  return useQuery<IJobDetails>({
    queryKey: ["apply", pagination.current, pagination.limit, status],
    queryFn: async () =>
      await getApplyJobAPI({
        page: pagination.current,
        limit: pagination.limit,
        status: status || " ",
        slug: slug,
      }),
  });
};
