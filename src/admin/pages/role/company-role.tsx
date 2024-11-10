import React, { useState } from "react";
import DummyData from "../../../shared/dummy-data/company-role.json";
import { Table, TableColumnsType } from "antd";
import Popup from "reactjs-popup";
import Crud from "../../components/permission/crud";
interface DataType {
  roleID: string;
  name: string;
}

const data: DataType[] = DummyData;

const CompanyRole: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            <button
              onClick={() => {
                console.log(roleID);
                setIsOpen(!isOpen);
              }}
              className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-sm"
            >
              Permission
            </button>
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
      <Popup
        onClose={() => {
          setIsOpen(!isOpen);
        }}
        modal={true}
        open={isOpen}
        overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
        contentStyle={{
          width: "100%",
          background: "white",
          maxWidth: 600,
          padding: 20,
          borderRadius: 10,
        }}
      >
        <div className="space-y-5">
          <div className="flex items-center text-sm font-semibold justify-between">
            <h1 className="text-lg">Permission</h1>
            <Crud></Crud>
          </div>
          <div className="flex items-center text-sm font-semibold justify-between">
            <h1 className="text-lg">Staff</h1>
            <Crud></Crud>
          </div>
          <div className="flex items-center text-sm font-semibold justify-between">
            <h1 className="text-lg">Jobs</h1>
            <Crud></Crud>
          </div>
          <div className="flex items-center text-sm font-semibold justify-between">
            <h1 className="text-lg">Invitations</h1>
            <Crud></Crud>
          </div>
          <div className="flex items-center text-sm font-semibold justify-between">
            <h1 className="text-lg">Assets</h1>
            <Crud></Crud>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default CompanyRole;
