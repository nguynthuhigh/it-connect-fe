import React, { useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TablePaginationConfig } from "antd";
import VariantRole from "../../../shared/components/variant/variant-role";
import VariantStatus from "../../../shared/components/variant/variant-status";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/api/user.api";
import UserRole from "../../components/user/user-role";
import { DataTypeUser } from "../../../shared/types/user";
import ProtectedFeature from "../../components/protected/protected-feat";
interface UsersPaginate {
  data: DataTypeUser[];
  pageCount: number;
  total: number;
}
const Users: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 5,
  });

  const { data, isLoading } = useQuery<UsersPaginate>({
    queryKey: ["user", pagination.current, pagination.limit],
    queryFn: async () => await getUser(pagination.current, pagination.limit),
  });

  const handleOpenPopup = () => {
    setIsOpen(!isOpen);
  };

  const columns: TableColumnsType<DataTypeUser> = [
    {
      title: "#",
      dataIndex: "key",
      render: (text, record, index) => index + 1,
    },
    {
      title: "PHOTO",
      dataIndex: "photo",
      render: (_, { photo }) => (
        <img className="w-10 h-10 rounded-full object-cover" src={photo} />
      ),
    },
    {
      title: "NAME",
      dataIndex: "name",
      render: (_, { name, email }) => (
        <>
          <h1 className="font-semibold">{name}</h1>
          <h1>{email}</h1>
        </>
      ),
    },
    {
      title: "ROLE",
      dataIndex: "role",
      render: (_, { Roles }) => (
        <div className="flex space-x-2">
          {Roles.map((item) => (
            <VariantRole key={item.name} role={item.name} />
          ))}
        </div>
      ),
    },
    {
      title: "JOIN DATE",
      dataIndex: "createdDate",
      sorter: (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      render: (_, { createdAt }) => <div>{createdAt.toString()}</div>,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (_, { status }) => <VariantStatus status={status || "active"} />,
    },
    {
      title: "ACTION",
      dataIndex: "action",
      render: (_, { userID }) => (
        <div className="space-x-4">
          <ProtectedFeature resource="role" action="set">
            <button
              onClick={() => {
                setUserId(userID);
                setIsOpen(!isOpen);
              }}
              className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-sm"
            >
              Role
            </button>
          </ProtectedFeature>
          <button
            onClick={() => console.log(userID)}
            className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-sm"
          >
            View more
          </button>
        </div>
      ),
    },
  ];

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPagination((prev) => ({
      ...prev,
      current: pagination.current || 1,
      pageSize: pagination.pageSize || 5,
    }));
  };

  if (isLoading) return <div>...Loading</div>;

  return (
    <>
      <Table<DataTypeUser>
        columns={columns}
        dataSource={data?.data}
        pagination={{
          current: pagination.current,
          pageSize: pagination.limit,
          total: data?.total,
        }}
        loading={isLoading}
        onChange={handleTableChange}
      />
      <UserRole
        handleOpenPopup={handleOpenPopup}
        isOpen={isOpen}
        userID={userId}
      />
    </>
  );
};

export default Users;
