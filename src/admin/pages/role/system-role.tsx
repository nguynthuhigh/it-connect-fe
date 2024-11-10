import React, { useState } from "react";
import { Table, TableColumnsType } from "antd";
import Permission from "../../components/permission/permission";
import { useQuery } from "@tanstack/react-query";
import { getRoles } from "../../services/api/role.api";
import ProtectedFeature from "../../components/protected/protected-feat";
interface DataType {
  roleID: string;
  name: string;
}

const Role: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectRole, setSelectRole] = useState<string>("");
  const { data, isLoading } = useQuery({
    queryKey: ["roles"],
    queryFn: async () => {
      return await getRoles();
    },
  });
  if (isLoading) return "...loading";
  const handleOpenPopup = () => {
    setIsOpen(!isOpen);
  };
  const columns: TableColumnsType<DataType> = [
    {
      title: "#",
      render: (text, record, index) => index + 1,
    },
    {
      title: "ROLE",
      width: "50%",
      dataIndex: "name",
    },
    {
      title: "TOTAL USER",
      dataIndex: "totalUser",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      render: (_, { roleID }) => {
        return (
          <div className="space-x-2">
            <ProtectedFeature action="permission" resource="role">
              <button
                onClick={() => {
                  setSelectRole(roleID);
                  setIsOpen(!isOpen);
                }}
                className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-sm"
              >
                Permission
              </button>
            </ProtectedFeature>

            <button
              onClick={() => {
                console.log(roleID);
              }}
              className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-sm"
            >
              View more
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table<DataType> columns={columns} dataSource={data} pagination={false} />
      <Permission
        handleOpenPopup={handleOpenPopup}
        isOpen={isOpen}
        roleID={selectRole}
      ></Permission>
    </>
  );
};

export default Role;
