import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
  key: React.Key;
  photo: string;
  name: string;
  email: string;
  description: string;
  createdDate: string;
  status: string;
  invitationID: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: "key",
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
    title: "DESCRIPTION",
    dataIndex: "description",
    width: "30%",
  },
  {
    title: "APPLIED DATE",
    dataIndex: "createdDate",
    // sorter: (a, b) => a.createdDate - b.createdDate,
  },
  {
    title: "STATUS",
    dataIndex: "status",
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
          className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-lg"
        >
          View CV
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
    description:
      "Full-stack Developer with a passion for building scalable web applications.",
    createdDate: "2024-10-01",
    status: "Active",
    invitationID: "Edit",
    key: "1",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Ava Moore",
    email: "ava.moore@example.com",
    description:
      "Data Analyst specializing in big data analytics and predictive modeling.",
    createdDate: "2024-09-15",
    status: "Inactive",
    invitationID: "Activate",
    key: "",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Noah White",
    email: "noah.white@example.com",
    description:
      "Cybersecurity expert with experience in vulnerability assessments and risk management.",
    createdDate: "2024-08-22",
    status: "Active",
    invitationID: "Edit",
    key: "",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Mia Harris",
    email: "mia.harris@example.com",
    description:
      "Project Manager leading cross-functional teams in software development projects.",
    createdDate: "2024-07-30",
    status: "Suspended",
    invitationID: "Reinstate",
    key: "",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Ethan Walker",
    email: "ethan.walker@example.com",
    description:
      "Cloud Architect specializing in AWS and Azure cloud solutions.",
    createdDate: "2024-06-25",
    status: "Active",
    invitationID: "Edit",
    key: "",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Sophia King",
    email: "sophia.king@example.com",
    description:
      "UX Designer creating intuitive and user-centered interfaces for mobile apps.",
    createdDate: "2024-05-18",
    status: "Inactive",
    invitationID: "Activate",
    key: "",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Mason Green",
    email: "mason.green@example.com",
    description:
      "DevOps Engineer automating infrastructure deployments using CI/CD pipelines.",
    createdDate: "2024-04-10",
    status: "Active",
    invitationID: "Edit",
    key: "",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Isabella Scott",
    email: "isabella.scott@example.com",
    description:
      "Content Strategist focused on SEO and creating high-quality, engaging content.",
    createdDate: "2024-03-05",
    status: "Suspended",
    invitationID: "Reinstate",
    key: "",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Lucas Young",
    email: "lucas.young@example.com",
    description:
      "Backend Developer with expertise in Node.js and database management.",
    createdDate: "2024-02-25",
    status: "Active",
    invitationID: "Edit",
    key: "",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/20.jpg",
    name: "Emily Perez",
    email: "emily.perez@example.com",
    description:
      "Graphic Designer with a flair for modern and minimalist design aesthetics.",
    createdDate: "2024-01-12",
    status: "Inactive",
    invitationID: "Activate",
    key: "",
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
    pagination={{
      pageSize: 5,
      showSizeChanger: true,
      pageSizeOptions: ["5", "10", "15"],
    }}
  />
);

export default Invitations;
