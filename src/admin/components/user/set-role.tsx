import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../../shared/utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Switch } from "antd";
import {
  getRoles,
  getUserRoles,
  setUserRole,
} from "../../services/api/role.api";

interface IRole {
  roleID: string;
  name: string;
}

interface ResourcePermissionProps {
  userID: string;
}
interface setPermission {
  roleID: string;
  userID: string;
}
const ResourcePermission: React.FC<ResourcePermissionProps> = ({ userID }) => {
  const [roles, setRoles] = useState<IRole[]>();
  const [rolesDefault, setRolesDefault] = useState<IRole[]>();

  const { mutate } = useMutation({
    mutationFn: async ({ roleID, userID }: setPermission) => {
      await setUserRole(userID, roleID);
    },
    onSuccess: () => {
      console.log("ok");
    },
    onError: () => {
      console.log("error");
    },
  });
  const { isLoading } = useQuery<IRole[]>({
    queryKey: [`permission-${userID}`],
    queryFn: async () => {
      const data = await getUserRoles(userID);
      console.log(data);
      setRoles(data);
      return data;
    },
  });
  const { isLoading: isLoadingR } = useQuery<IRole[]>({
    queryKey: [`role-default`],
    queryFn: async () => {
      const data = await getRoles();
      setRolesDefault(data);
      return data;
    },
  });
  if (isLoading || isLoadingR) return "...Loading";

  const toggleAction = (roleID: string, name: string) => {
    setRoles((prev) => {
      const roleExists = prev?.some((item) => item.roleID === roleID);
      if (roleExists) {
        return prev?.filter((item) => item.roleID !== roleID);
      } else {
        return [...(prev || []), { roleID, name }];
      }
    });
    console.log(roles);
    const obj = { roleID, name, userID };
    mutate(obj);
  };

  return (
    <div className="font-semibold text-center space-y-5">
      {rolesDefault?.map((item) => (
        <div key={item.name} className="flex items-center">
          <h1 className="text-lg">{capitalizeFirstLetter(item.name)}</h1>
          <div className="ml-auto grid grid-cols-4 w-[200px]">
            <Switch
              checked={roles?.some((p) => p.name === item.name)}
              onChange={() => {
                toggleAction(item.roleID, item.name);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcePermission;
