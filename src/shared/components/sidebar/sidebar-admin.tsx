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
const path = [
  {
    pathname: "/admin/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    icon_gray: DashboardGray,
  },
  {
    pathname: "/admin/users",
    name: "Users",
    icon: Permission,
    icon_gray: PermissionGray,
  },
  {
    pathname: "/admin/sys-roles",
    name: "System Roles",
    icon: Jobs,
    icon_gray: JobsGray,
  },
  {
    pathname: "/admin/company-roles",
    name: "Company Roles",
    icon: Jobs,
    icon_gray: JobsGray,
  },
  {
    pathname: "/admin/invitations",
    name: "Invitations",
    icon: Invitation,
    icon_gray: InvitationGray,
  },
];
const morePath = [
  {
    pathname: "/admin/draft",
    name: "Buy ITC",
    icon: ITC,
    icon_gray: ITCGray,
  },
  {
    pathname: "/company/transactions",
    name: "Transactions",
    icon: Transactions,
    icon_gray: TransactionsGray,
  },
];
export const SidebarAdmin = () => {
  const location = useLocation();
  return (
    <div className="w-[250px] border-r-2 h-[100vh] rounded-b-lg max-md:hidden">
      <div className="flex space-x-2 p-4 border-b-0 border-gray-500">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2023/03/nhung-bi-mat-ve-nobita-tung-bi-hieu-nham-la-chon-giong-doraemon_6401b11ace55f.jpeg"
          alt="User"
        />
        <div className="text-sm font-semibold">
          <h1 className="text-gray-500">HR</h1>
          <h1 className="text-black font-medium">Minh Nguyen</h1>
        </div>
      </div>
      <div className="border-b border-l-gray-main mx-2"></div>
      <div className="font-semibold">
        <h1 className="text-[12px] p-4 pb-0 mb-2 text-gray-500">MAIN</h1>
        {path.map((item) => (
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
