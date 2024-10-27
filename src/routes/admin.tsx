import Dashboard from "../admin/pages/home/dashboard";
import LoginAdmin from "../admin/pages/authentication/login";
import ManageUser from "../admin/pages/manage-user/manage-user";

import { SidebarAdmin } from "../shared/components/sidebar/sidebar-admin";
import Role from "../admin/pages/role/system-role";
import User from "../admin/pages/user";
import CompanyRole from "../admin/pages/role/company-role";

import CompanyList from "../admin/pages/company/company-list";
import { Outlet } from "react-router-dom";
const RootLayoutAdmin = () => (
  <div style={{ display: "flex" }}>
    <SidebarAdmin />
    <div style={{ flexGrow: 1 }} className="bg-gray-50">
      <Outlet />
    </div>
  </div>
);
export const AdminRoute = {
  path: "/admin",
  element: <RootLayoutAdmin></RootLayoutAdmin>,
  children: [
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
    },
    {
      path: "sys-roles",
      element: <Role></Role>,
    },
    {
      path: "company-roles",
      element: <CompanyRole></CompanyRole>,
    },
    {
      path: "users",
      element: <User></User>,
    },
    {
      path: "login-admin",
      element: <LoginAdmin />,
    },
    {
      path: "manage-user",
      element: <ManageUser></ManageUser>,
    },
    {
      path: "company-list",
      element: <CompanyList></CompanyList>,
    },
  ],
};
