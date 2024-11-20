import { Link, useLocation } from "react-router-dom";
import SideBarPart from "./sidebar-part";
import Dashboard from "../../assets/svg/dashboard.svg?react";
import Invitation from "../../assets/svg/invitations.svg?react";
import ITC from "../../assets/svg/itc.svg?react";
import Jobs from "../../assets/svg/jobs.svg?react";
import Permission from "../../assets/svg/permission.svg?react";
import Transactions from "../../assets/svg/transaction.svg?react";

import DashboardGray from "../../assets/svg/dashboard-gray.svg?react";
import InvitationGray from "../../assets/svg/invitations-gray.svg?react";
import ITCGray from "../../assets/svg/itc-gray.svg?react";
import JobsGray from "../../assets/svg/jobs-gray.svg?react";
import PermissionGray from "../../assets/svg/permission-gray.svg?react";
import TransactionsGray from "../../assets/svg/transaction-gray.svg?react";

import LogOut from "../../assets/svg/log-out.svg?react";
import ProtectedFeature from "../../../admin/components/protected/protected-feat";
import { authAPI } from "../../../admin/services/api/auth.api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
const path = [
  {
    pathname: "/admin/dashboard",
    name: "Dashboard",
    id: "dashboard",
    icon: Dashboard,
    icon_gray: DashboardGray,
  },
  {
    pathname: "/admin/users",
    name: "Users",
    icon: Permission,
    id: "user",
    icon_gray: PermissionGray,
  },
  {
    pathname: "/admin/sys-roles",
    name: "Roles",
    icon: Jobs,
    id: "role",
    icon_gray: JobsGray,
  },
  {
    pathname: "/admin/jobs",
    name: "Jobs",
    icon: Invitation,
    id: "job",
    icon_gray: InvitationGray,
  },
  {
    pathname: "/company/transactions",
    name: "Transactions",
    icon: Transactions,
    id: "transaction",
    icon_gray: TransactionsGray,
  },
];
const morePath = [
  {
    pathname: "/admin/draft",
    name: "Settings",
    icon: ITC,
    icon_gray: ITCGray,
  },
];
export const SidebarAdmin: React.FC = () => {
  const location = useLocation();
  const { data, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: authAPI,
  });
  if (isLoading) return "...Loading";
  console.log(data);
  return (
    <div className="w-[250px] border-r-2 h-[100vh] rounded-b-lg max-md:hidden">
      <div className="flex space-x-2 p-4 border-b-0 border-gray-500">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2023/03/nhung-bi-mat-ve-nobita-tung-bi-hieu-nham-la-chon-giong-doraemon_6401b11ace55f.jpeg"
          alt="User"
        />
        <div className="text-sm font-semibold">
          <div className="flex space-x-2">
            {data?.roles?.map((item: { name: string }, key: number) => (
              <h1 key={key} className="text-gray-500 ">
                {capitalizeFirstLetter(item?.name)}
              </h1>
            ))}
          </div>
          <h1 className="text-black font-medium text-ellipsis">
            {data.email}
          </h1>
        </div>
      </div>
      <div className="border-b border-l-gray-main mx-2"></div>
      <div className="font-semibold">
        <h1 className="text-[12px] p-4 pb-0 mb-2 text-gray-500">MAIN</h1>
        {path.map((item) => (
          <Link to={item.pathname} key={item.pathname}>
            <ProtectedFeature resource={item.id} action="view">
              <SideBarPart
                link={item.pathname}
                isSelected={location.pathname === item.pathname}
                Icon={item.icon}
                IconGray={item.icon_gray}
                state={item.name}
              />
            </ProtectedFeature>
          </Link>
        ))}
      </div>
      <div className="border-b border-l-gray-main mx-2"></div>

      <div className="font-semibold">
        <h1 className="text-[12px] p-4 pb-0 mb-2 text-gray-500">MORE</h1>
        {morePath.map((item) => (
          <Link to={item.pathname} key={item.pathname}>
            <SideBarPart
              link={item.pathname}
              isSelected={location.pathname === item.pathname}
              Icon={item.icon}
              IconGray={item.icon_gray}
              state={item.name}
            />
          </Link>
        ))}
      </div>
      <div className="flex font-semibold items-center space-x-1 p-4 bottom-0 absolute">
        <LogOut />
        <h1 className="text-[#D55F5A]">Log out</h1>
      </div>
    </div>
  );
};
