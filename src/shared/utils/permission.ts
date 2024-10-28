import { IPermission } from "../types/permission";

export const hasPermission = (
  permissions: IPermission[] | undefined,
  resource: string,
  action: string
): boolean => {
  if (!permissions || permissions.length === 0) {
    return false;
  }

  const permission = permissions.find(
    (p: IPermission) => p.resource === resource
  );

  return permission ? permission.action.includes(action) : false;
};
