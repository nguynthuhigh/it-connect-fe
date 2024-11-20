import React, { useState } from "react";
import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getJobsAPI, IGetJob } from "../../services/api/job.api";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../candidate/components/button/button";

interface DataType {
  slug: string;
  title: string;
  description: string;
  experience: string;
  level: string;
  salary: number;
  is_public: boolean;
  status: number;
  createdAt: string;
  jobID: number;
}

const JobTable: React.FC = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 10,
  });
  const columns: TableColumnsType<DataType> = [
    {
      title: "STT",
      render: (_: unknown, __: DataType, index: number) =>
        index + 1 + (pagination.current - 1) * pagination.limit,
      width: "5%",
    },
    {
      title: "NAME",
      dataIndex: "title",
    },
    {
      title: "DESCRIPTION",
      dataIndex: "description",
      width: "30%",
      render: (text) => <div dangerouslySetInnerHTML={{ __html: text }} />,
    },
    {
      title: "LEVEL",
      dataIndex: "level",
    },
    {
      title: "SALARY",
      dataIndex: "salary",
      render: (salary) => `${salary} VND`,
    },
    {
      title: "STATUS",
      dataIndex: "status",
    },
    {
      title: "CREATED DATE",
      dataIndex: "createdAt",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      render: (_, { slug }) => (
        <button
          onClick={() => navigate(`/company/job/${slug}`)}
          className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-lg"
        >
          View more
        </button>
      ),
    },
  ];
  const { data, isLoading } = useQuery<IGetJob>({
    queryKey: ["get-jobs", pagination.current, pagination.limit],
    queryFn: async () => {
      return await getJobsAPI({
        limit: pagination.limit,
        page: pagination.current,
      });
    },
  });

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setPagination((prev) => ({
      ...prev,
      current: pagination.current || 1,
      pageSize: pagination.pageSize || 5,
    }));
  };

  return (
    <div>
      <Link to={"/company/job/post-job"}>
        <div className="w-[200px] ml-auto my-2">
          <Button name="Post Job"></Button>
        </div>
      </Link>
      <Table<DataType>
        columns={columns}
        dataSource={data?.data || []}
        loading={isLoading}
        pagination={{
          current: pagination.current,
          pageSize: pagination.limit,
          total: data?.total,
        }}
        onChange={handleTableChange}
        rowKey="jobID"
      />
    </div>
  );
};
export default JobTable;
