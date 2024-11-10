import React from "react";
import { capitalizeFirstLetter } from "../../utils/utils";

const VariantRole: React.FC<{ role: string }> = ({ role }) => {
  const Role = capitalizeFirstLetter(role);
  switch (role.toLowerCase()) {
    case "admin":
      return (
        <div className="bg-red-50 text-red-500 border-red-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {Role}
        </div>
      );
    case "company":
      return (
        <div className="bg-green-50 text-green-500 border-green-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {Role}
        </div>
      );
    case "finance staff":
      return (
        <div className="bg-pink-50 text-pink-500 border-pink-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {Role}
        </div>
      );
    case "support staff":
      return (
        <div className="bg-yellow-50 text-yellow-500 border-yellow-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {Role}
        </div>
      );
    default:
      <div className="bg-blue-50 text-blue-500 border-blue-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
        User
      </div>;
  }
};

export default VariantRole;
