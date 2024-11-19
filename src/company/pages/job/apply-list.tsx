import React, { useState } from "react";
import { Table } from "antd";
import { TableColumnsType, TablePaginationConfig } from "antd";
import { useParams } from "react-router-dom";
import { ApplyJob, User } from "../../services/api/job.api";
import { useJobApplications } from "../../hooks/useJobApplications";
import PopupCustom from "../../components/pop-up/pop-up";
import StatusVariant from "./status-variant";
const ApplyList: React.FC = () => {
  const { slug } = useParams();
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 5,
  });
  const [status, setStatus] = useState<string>();
  const { data, isLoading } = useJobApplications(
    slug as string,
    pagination,
    status
  );
  const [email, setEmail] = useState<string>();
  const [applyJob, setApplyJob] = useState<ApplyJob>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const columns: TableColumnsType<User> = [
    {
      title: "#",
      dataIndex: "key",
      render: (_, __, index) => index + 1,
    },
    {
      title: "PHOTO",
      dataIndex: "photo",
      render: (_, { image }) => (
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={image}
          alt="user"
        />
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
      title: "STATUS",
      dataIndex: "status",
      render: (_, { ApplyJob }) => (
        <>
          <h1 className="font-semibold">
            <StatusVariant status={ApplyJob.status}></StatusVariant>
          </h1>
        </>
      ),
    },
    {
      title: "ACTION",
      dataIndex: "action",
      render: (_, { ApplyJob, email }) => (
        <div className="space-x-4">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setApplyJob(ApplyJob);
              setEmail(email);
            }}
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

  if (isLoading) return <div>Loading...</div>;
  const handleAccept = () => {
    console.log("This job post was deleted");
    setIsOpen(false);
  };

  const handleReject = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Table<User>
        columns={columns}
        dataSource={data?.data?.Users}
        pagination={{
          current: pagination.current,
          pageSize: pagination.limit,
          total: data?.total,
        }}
        loading={isLoading}
        onChange={handleTableChange}
        rowKey="userID"
      />
      <PopupCustom
        visible={isOpen}
        onCancel={handleReject}
        onConfirm={handleAccept}
        title={`Profile ${email}`}
        titleCancel="Reject"
        titleConfirm="Accept"
      >
        <div>{applyJob?.message}</div>
        <div>{applyJob?.cv}</div>
      </PopupCustom>
    </>
  );
};

export default ApplyList;
