import { useQuery } from "@tanstack/react-query";
import { authAPI, IUser } from "../services/api/auth.api";

export const useAuthCompany = () => {
  return useQuery<IUser>({
    queryKey: ["auth-company"],
    queryFn: async () => await authAPI(),
  });
};
