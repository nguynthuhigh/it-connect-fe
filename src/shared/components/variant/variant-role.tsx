import React from "react";

const VariantRole: React.FC<{ role: string }> = ({ role }) => {
  switch (role.toLowerCase()) {
    case "user":
      return (
        <div className="bg-blue-50 text-blue-500 border-blue-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {role}
        </div>
      );

    case "admin":
      return (
        <div className="bg-red-50 text-red-500 border-red-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {role}
        </div>
      );
    case "company":
      return (
        <div className="bg-green-50 text-green-500 border-green-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {role}
        </div>
      );
    case "finance staff":
      return (
        <div className="bg-pink-50 text-pink-500 border-pink-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {role}
        </div>
      );
    case "support staff":
      return (
        <div className="bg-yellow-50 text-yellow-500 border-yellow-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {role}
        </div>
      );
    default:
      <></>;
  }
};

export default VariantRole;
