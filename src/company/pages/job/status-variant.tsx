import React from "react";
import { capitalizeFirstLetter } from "../../../shared/utils/utils";

const StatusVariant: React.FC<{ status: string }> = ({ status }) => {
  const value = status.toLowerCase();
  switch (true) {
    case value.includes("pending"):
      return (
        <div
          className={`border-yellow-400 w-fit py-0.5 px-2.5 border-[2px] font-semibold text-yellow-500 rounded-full bg-yellow-50`}
        >
          <h1 className="text-sm">Pending</h1>
        </div>
      );
    case value.includes("expire"):
      return (
        <div
          className={`border-red-400 w-fit py-0.5 px-2.5 border-[2px] font-semibold text-red-500 rounded-full bg-red-50`}
        >
          <h1 className="text-sm">Expire</h1>
        </div>
      );

    case value.includes("accepted"):
      return (
        <div
          className={`border-green-400 w-fit py-0.5 px-2.5 border-[2px] font-semibold text-green-500 rounded-full bg-green-50`}
        >
          <h1 className="text-sm">Accepted</h1>
        </div>
      );

    case value.includes("reject"):
      return (
        <div
          className={`border-red-400 w-fit py-0.5 px-2.5 border-[2px] font-semibold text-red-500 rounded-full bg-red-50`}
        >
          <h1 className="text-sm">Reject</h1>
        </div>
      );

    default:
      return (
        <div
          className={`border-black w-fit py-0.5 px-2.5 border-[2px] font-semibold text-black rounded-full`}
        >
          <h1 className="text-sm">{capitalizeFirstLetter(status)}</h1>
        </div>
      );
  }
};
export default StatusVariant;
