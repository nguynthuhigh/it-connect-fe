// src/components/ProtectedRoute.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { hasPermission } from "../../../shared/utils/permission";
import NotFound from "../../../shared/pages/not-found";
import { useGetUserPermissionsQuery } from "../../../redux/api-slice";
interface ProtectedRouteProps {
  resource: string;
  action: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  resource,
  action,
}) => {
  const { data } = useGetUserPermissionsQuery();
  // const userPermissions = useSelector(selectUserPermissions);
  // const { data: userPermissions } = useGetUserPermissionsQuery();
  console.log(data);
  const isAuthorized = hasPermission(data, resource, action);

  // const { data: userPermissions, error, isLoading } = useGetUserPermissionsQuery();
  if (!isAuthorized) {
    return <NotFound />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
