import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPermission } from "../shared/types/permission";
import { getUserPermissionAPI } from "../admin/services/api/permission.api";

export const apiSlice = createApi({
  reducerPath: "userPermission",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getUserPermissions: builder.query<IPermission[], void>({
      queryFn: async () => {
        const data = await getUserPermissionAPI();
        return { data };
      },
    }),
  }),
});

export const { useGetUserPermissionsQuery } = apiSlice;
export const selectUserPermissions =
  apiSlice.endpoints.getUserPermissions.select();
