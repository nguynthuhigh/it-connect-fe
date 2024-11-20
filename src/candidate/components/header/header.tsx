import React from "react";
import Logo from "../../assets/svg/logo.svg?react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCookie, removeCookie } from "../../../shared/utils/cookie";
import { authAPI } from "../../services/api/auth.api";
import { Dropdown, MenuProps, Space, Typography } from "antd";

const Header: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "invitations",
      label: "Job Invitations",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "logout",
      label: "Log out",
    },
  ];
  const token = getCookie("at-itc");
  console.log(token);
  const { data, isError } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      return await authAPI();
    },
    enabled: !!token,
  });
  if (isError) {
    removeCookie("at-itc");
  }
  console.log(data);
  return (
    <div className="w-full h-20 bg-blue-main fixed z-10 p-1 ">
      <div className="max-w-[1200px] px-4 sm:p-0 mx-auto w-full flex items-center">
        <Link to={"/"}>
          <Logo className="w-15" />
        </Link>
        <div className="text-white font-semibold flex space-x-2 ml-10 max-md:hidden">
          <h1>All Jobs</h1>
          <h1>It Companies</h1>
        </div>

        {data && data.email ? (
          <div className="font-semibold flex ml-auto space-x-6 items-center">
            <Link
              className="ml-auto text-sm text-white"
              to={!data.companyID ? "/register-company" : "/company"}
            >
              For Employer
            </Link>
            <Dropdown
              menu={{
                items,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
              trigger={["hover"]}
            >
              <Typography.Link>
                <Space className="text-sm">
                  <img
                    className="w-10 rounded-full"
                    src={
                      data.image
                        ? data.image
                        : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                    }
                  ></img>
                  <div className="text-sm text-white"> {data.email}</div>
                </Space>
              </Typography.Link>
            </Dropdown>
          </div>
        ) : (
          <Link
            className="ml-auto font-semibold text-sm rounded-full bg-white py-2 px-3 text-blue-main"
            to="/login"
          >
            Sign Up/ Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
