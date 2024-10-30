import Dashboard from "../admin/pages/home/dashboard";
import LoginAdmin from "../admin/pages/authentication/login";
import ManageUser from "../admin/pages/manage-user/manage-user";
import { SidebarAdmin } from "../shared/components/sidebar/sidebar-admin";
import Role from "../admin/pages/role/system-role";
import User from "../admin/pages/user";
import CompanyRole from "../admin/pages/role/company-role";
import CompanyList from "../admin/pages/company/company-list";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../admin/components/protected/protected-route";
import { IPermission } from "../shared/types/permission";
import { getUserPermissionAPI } from "../admin/services/api/permission.api";
import { useQuery } from "@tanstack/react-query";
import DetailCompany from "../admin/pages/company/detail-company";
import AdminLogin from "../admin/pages/authentication/admin-login";

const RootLayoutAdmin = () => {
  const {
    data: userPermissions,
    isLoading,
    error,
  } = useQuery<IPermission[]>({
    queryKey: ["user-permission"],
    queryFn: getUserPermissionAPI,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching permissions</div>;

  return (
    <div style={{ display: "flex" }}>
      <SidebarAdmin />
      <div style={{ flexGrow: 1 }} className="bg-gray-50">
        <Outlet context={{ userPermissions }} />
      </div>
    </div>
  );
};

export const AdminRoute = {
  path: "/admin",
  element: <RootLayoutAdmin />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "sys-roles",
      element: <ProtectedRoute resource="role" action="view" />,
      children: [{ path: "", element: <Role /> }],
    },
    {
      path: "company-roles",
      element: <ProtectedRoute resource="company" action="view" />,
      children: [{ path: "", element: <CompanyRole /> }],
    },
    {
      path: "users",
      element: <ProtectedRoute resource="user" action="view" />,
      children: [{ path: "", element: <User /> }],
    },
    {
      path: "login-admin",
      element: <LoginAdmin />,
    },
    {
      path: "manage-user",
      element: <ManageUser />,
    },
    {
      path: "company-list",
      element: <CompanyList />,
    },

    {
      path: "detail-company",
      element: <DetailCompany />,
    },
    {
      path: "admin-login",
      element: <AdminLogin />,
    },
  ],
};
