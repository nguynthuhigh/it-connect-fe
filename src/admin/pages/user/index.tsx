import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import VariantRole from "../../../shared/components/variant/variant-role";
import VariantStatus from "../../../shared/components/variant/variant-status";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/api/user.api";

interface DataType {
  photo: string;
  name: string;
  email: string;
  Roles: [
    {
      name: string;
    }
  ];
  createdAt: Date;
  status: string;
  invitationID: string;
}

const columns: TableColumnsType<DataType> = [
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
          <VariantRole role={item.name} />
        ))}
      </div>
    ),
  },
  {
    title: "JOIN DATE",
    dataIndex: "createdDate",
    sorter: (a, b) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    render: (_, { createdAt }) => <div>{createdAt}</div>,
  },
  {
    title: "STATUS",
    dataIndex: "status",
    render: (_, { status }) => <VariantStatus status={status || "active"} />,
  },
  {
    title: "ACTION",
    dataIndex: "action",
    render: (_, { invitationID }) => (
      <div className="space-x-4">
        <button
          onClick={() => console.log(invitationID)}
          className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-sm"
        >
          Role
        </button>
        <button
          onClick={() => console.log(invitationID)}
          className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-sm"
        >
          View more
        </button>
      </div>
    ),
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Users: React.FC = () => {
  const { data, isLoading } = useQuery<DataType[]>({
    queryKey: ["user"],
    queryFn: async () => await getUser(),
  });

  if (isLoading) return <div>...Loading</div>;
  return (
    <Table<DataType>
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={false}
    />
  );
};

export default Users;
