import React, { useState } from "react";
import CustomSwitch from "./switch";
import { capitalizeFirstLetter } from "../../../shared/utils/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getPermissionsAPI,
  setPermissionAPI,
} from "../../services/api/permission.api";

interface IPermission {
  resource: string;
  action: string[];
}

interface ResourcePermissionProps {
  roleID: string;
}
interface setPermission {
  resource: string;
  action: string;
  roleID: string;
}
const ResourcePermission: React.FC<ResourcePermissionProps> = ({ roleID }) => {
  const PERMISSION_DEFAULT: IPermission[] = [
    { resource: "dashboard", action: ["view"] },
    { resource: "user", action: ["view", "ban"] },
    { resource: "role", action: ["view", "permission", "set"] },
    { resource: "company", action: ["view", "ban"] },
    { resource: "transaction", action: ["view"] },
    { resource: "job", action: ["view", "delete"] },
    { resource: "review", action: ["view", "delete", "accept"] },
  ];

  const [permissions, setPermissions] = useState<IPermission[]>([
    { resource: "user", action: ["view"] },
    { resource: "role", action: ["set", "view"] },
  ]);
  const { mutate } = useMutation({
    mutationFn: async ({ resource, action, roleID }: setPermission) => {
      await setPermissionAPI(resource, roleID, action);
    },
    onSuccess: () => {
      console.log("ok");
    },
    onError: () => {
      console.log("error");
    },
  });
  const { isLoading } = useQuery<IPermission[]>({
    queryKey: [`permission-${roleID}`],
    queryFn: async () => {
      const res = await getPermissionsAPI(roleID);
      setPermissions(res.data);
      return res.data;
    },
  });
  if (isLoading) return "...Loading";

  const toggleAction = (resource: string, action: string) => {
    setPermissions((prev) => {
      const resourceExists = prev.some((p) => p.resource === resource);
      if (resourceExists) {
        return prev.map((p) =>
          p.resource === resource
            ? {
                ...p,
                action: p.action.includes(action)
                  ? p.action.filter((a) => a !== action)
                  : [...p.action, action],
              }
            : p
        );
      } else {
        return [
          ...prev,
          {
            resource: resource,
            action: [action],
          },
        ];
      }
    });
    console.log(resource, action);
    console.log(roleID);
    const obj = { resource, action, roleID };
    mutate(obj);
  };

  return (
    <div className="font-semibold text-center space-y-5">
      {PERMISSION_DEFAULT.map((item) => (
        <div key={item.resource} className="flex items-center">
          <h1 className="text-lg">{capitalizeFirstLetter(item.resource)}</h1>
          <div className="ml-auto grid grid-cols-4 w-[400px]">
            {item.action.map((action) => {
              const isEnabled = permissions.some(
                (p) => p.resource === item.resource && p.action.includes(action)
              );
              return (
                <CustomSwitch
                  key={action}
                  name={action}
                  resource={item.resource}
                  isEnabled={isEnabled}
                  toggleAction={toggleAction}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourcePermission;
