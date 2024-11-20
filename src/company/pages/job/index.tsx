import React, { useState } from "react";
import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getJobsAPI, IGetJob } from "../../services/api/job.api";

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
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 4,
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
      title: "EXPERIENCE",
      dataIndex: "experience",
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
      render: (_, { jobID }) => (
        <button
          onClick={() => console.log(jobID)}
          className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-lg"
        >
          View more
        </button>
      ),
    },
  ];
  // Use useQuery to fetch paginated data
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
  );
};
export default JobTable;
