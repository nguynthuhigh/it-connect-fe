import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
import { hasPermission } from "../../../shared/utils/permission";
import { useGetUserPermissionsQuery } from "../../../redux/api-slice";

interface ProtectedButtonProps {
  resource: string;
  action: string;
  children: React.ReactNode;
}

const ProtectedFeature: React.FC<ProtectedButtonProps> = ({
  resource,
  action,
  children,
}) => {
  //   const permissions = useSelector((state: RootState) => state.user.permissions);
  // const permissions = [
  //   { resource: "dashboard", action: ["view"] },
  //   { resource: "user", action: ["view", "manage"] },
  //   { resource: "role", action: ["view", "permission"] },
  //   { resource: "company", action: ["view", "manage"] },
  // ];
  // const { store } = useContext(ReactReduxContext);
  // const userPermissions = store.getState().userPermission;
  const { data } = useGetUserPermissionsQuery();

  console.log(data);
  if (!hasPermission(data, resource, action)) return null;

  return <>{children}</>;
};

export default ProtectedFeature;
