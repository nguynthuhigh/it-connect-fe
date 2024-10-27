import axiosInstance from "../../../shared/axios/instance";
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
export const getUser = async (): Promise<DataType[]> => {
  const res = await axiosInstance.get("/api/v1/user");
  return res.data;
};
