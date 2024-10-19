import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import VariantRole from "../../../shared/components/variant/variant-role";
import VariantStatus from "../../../shared/components/variant/variant-status";

interface DataType {
  photo: string;
  name: string;
  email: string;
  role: string;
  createdDate: string;
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
    render: (_, { photo }) => {
      return (
        <>
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={photo}
          ></img>
        </>
      );
    },
  },
  {
    title: "NAME",
    dataIndex: "name",
    render: (_, { name, email }) => {
      return (
        <>
          <h1 className="font-semibold">{name}</h1>
          <h1>{email}</h1>
        </>
      );
    },
  },
  {
    title: "ROLE",
    dataIndex: "role",
    render: (_, { role }) => {
      return <VariantRole role={role}></VariantRole>;
    },
  },
  {
    title: "JOIN DATE",
    dataIndex: "createdDate",
    // sorter: (a, b) => a.createdDate - b.createdDate,
  },
  {
    title: "STATUS",
    dataIndex: "status",
    render: (_, { status }) => {
      return <VariantStatus status={status}></VariantStatus>;
    },
  },
  {
    title: "ACTION",
    dataIndex: "action",
    render: (_, { invitationID }) => {
      return (
        <button
          onClick={() => {
            console.log(invitationID);
          }}
          className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-sm"
        >
          View more
        </button>
      );
    },
  },
];

const data: DataType[] = [
  {
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Liam Carter",
    email: "liam.carter@example.com",
    role: "User",
    createdDate: "2024-10-01",
    status: "Active",
    invitationID: "Edit",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Ava Moore",
    email: "ava.moore@example.com",
    role: "User",
    createdDate: "2024-09-15",
    status: "Inactive",
    invitationID: "Activate",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Noah White",
    email: "noah.white@example.com",
    role: "Admin",
    createdDate: "2024-08-22",
    status: "Active",
    invitationID: "Edit",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Mia Harris",
    email: "mia.harris@example.com",
    role: "Company",
    createdDate: "2024-07-30",
    status: "Inactive",
    invitationID: "Reinstate",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Ethan Walker",
    email: "ethan.walker@example.com",
    role: "Company",
    createdDate: "2024-06-25",
    status: "Active",
    invitationID: "Edit",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Sophia King",
    email: "sophia.king@example.com",
    role: "Company",
    createdDate: "2024-05-18",
    status: "Inactive",
    invitationID: "Activate",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Mason Green",
    email: "mason.green@example.com",
    role: "Support Staff",
    createdDate: "2024-04-10",
    status: "Active",
    invitationID: "Edit",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Isabella Scott",
    email: "isabella.scott@example.com",
    role: "Finance Staff",
    createdDate: "2024-03-05",
    status: "Inactive",
    invitationID: "Reinstate",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Lucas Young",
    email: "lucas.young@example.com",
    role: "Finance Staff",
    createdDate: "2024-02-25",
    status: "Active",
    invitationID: "Edit",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/20.jpg",
    name: "Emily Perez",
    email: "emily.perez@example.com",
    role: "Finance Staff",
    createdDate: "2024-01-12",
    status: "Inactive",
    invitationID: "Activate",
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

const Invitations: React.FC = () => (
  <Table<DataType>
    columns={columns}
    dataSource={data}
    onChange={onChange}
    pagination={false}
  />
);

export default Invitations;
