import React from "react";

const VariantStatus: React.FC<{ status: string }> = ({ status }) => {
  switch (status.toLowerCase()) {
    case "active":
      return (
        <div className="bg-red-50 text-red-500 border-red-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {status}
        </div>
      );
    case "inactive":
      return (
        <div className="bg-green-50 text-green-500 border-green-500  border-[2px] rounded-full w-fit px-1.5 text-sm font-semibold">
          {status}
        </div>
      );
    default:
      <></>;
  }
};

export default VariantStatus;
