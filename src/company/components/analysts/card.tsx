import React from "react";
import CountUp from "react-countup";

interface CardProps {
  title: string;
  value: number;
  percentage: number;
  backgroundColor: string;
  prefix?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  percentage,
  backgroundColor,
  prefix,
}) => {
  const isPositive = percentage >= 0;

  return (
    <div
      className={`w-full h-fit hover:cursor-pointer p-5 rounded-xl flex flex-col justify-between relative shadow-lg ${backgroundColor}`}
    >
      <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white flex justify-center items-center shadow-md">
        <span className="text-sm text-black">↗</span>
      </div>

      <div className="text-lg font-bold mb-2">{title}</div>

      <div className="text-2xl font-bold mb-1">
        <CountUp
          start={0}
          end={value}
          duration={2}
          separator=","
          prefix={prefix}
        />
      </div>
      <div
        className={`text-sm font-medium ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {Math.abs(percentage).toFixed(1)}%{" "}
        {isPositive ? "then last month" : "lower than last month"}
      </div>

      {/* <div className="text-xs text-gray-600 mt-1">{description}</div> */}
    </div>
  );
};

export default Card;
