// import React, { useEffect, useState } from "react";
// import { Table } from "antd";
// import type { TableColumnsType, TablePaginationConfig } from "antd";
// import axios from "axios";

// interface DataType {
//   key: React.Key;
//   photo: string;
//   name: string;
//   email: string;
//   description: string;
//   createdDate: string;
//   status: string;
//   invitationID: string;
// }

// const columns: TableColumnsType<DataType> = [
//   {
//     title: "#",
//     dataIndex: "key",
//   },
//   {
//     title: "PHOTO",
//     dataIndex: "photo",
//     render: (_, { photo }) => (
//       <img
//         className="w-10 h-10 rounded-full object-cover"
//         src={photo}
//         alt="user"
//       />
//     ),
//   },
//   {
//     title: "NAME",
//     dataIndex: "name",
//     render: (_, { name, email }) => (
//       <>
//         <h1 className="font-semibold">{name}</h1>
//         <h1>{email}</h1>
//       </>
//     ),
//   },
//   {
//     title: "DESCRIPTION",
//     dataIndex: "description",
//     width: "30%",
//   },
//   {
//     title: "APPLIED DATE",
//     dataIndex: "createdDate",
//   },
//   {
//     title: "STATUS",
//     dataIndex: "status",
//   },
//   {
//     title: "ACTION",
//     dataIndex: "action",
//     render: (_, { invitationID }) => (
//       <button
//         onClick={() => {
//           console.log(invitationID);
//         }}
//         className="px-3 py-1.5 bg-blue-main font-semibold text-white rounded-lg"
//       >
//         View CV
//       </button>
//     ),
//   },
// ];

// const Invitations: React.FC = () => {
//   const [data, setData] = useState<DataType[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [pagination, setPagination] = useState<TablePaginationConfig>({
//     current: 1,
//     pageSize: 5,
//     total: 0,
//   });

//   const fetchData = async (page: number, pageSize: number) => {
//     setLoading(true);
//     try {
//       const response = await axios.get("/api/invitations", {
//         params: {
//           page,
//           pageSize,
//         },
//       });

//       setData(
//         response.data.items.map((item: any, index: number) => ({
//           key: (page - 1) * pageSize + index + 1,
//           photo: item.photo,
//           name: item.name,
//           email: item.email,
//           description: item.description,
//           createdDate: item.createdDate,
//           status: item.status,
//           invitationID: item.invitationID,
//         }))
//       );

//       setPagination((prev) => ({
//         ...prev,
//         total: response.data.totalCount, // Set total records from API
//       }));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData(pagination.current || 1, pagination.pageSize || 5);
//   }, [pagination.current, pagination.pageSize]);

//   const handleTableChange = (newPagination: TablePaginationConfig) => {
//     setPagination(newPagination);
//   };

//   return (
//     <Table<DataType>
//       columns={columns}
//       dataSource={data}
//       pagination={pagination}
//       loading={loading}
//       onChange={handleTableChange}
//     />
//   );
// };

// export default Invitations;
