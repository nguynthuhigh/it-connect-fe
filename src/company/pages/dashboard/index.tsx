import React from "react";
import PieChart from "../../components/analysts/pie-chart";
import Card from "../../components/analysts/card";
import LineChart from "../../components/analysts/line-chart";
import TransactionList from "../../components/analysts/list";

const Dashboard: React.FC = () => {
  return (
    <div className="font-inter">
      {/* <PieChart></PieChart> */}
      <div className="grid grid-cols-4 gap-5  max-md:grid-cols-2">
        <Card
          title="Balance"
          value={123123}
          percentage={123123}
          prefix={"ITC "}
          backgroundColor="bg-orange-50"
        ></Card>
        <Card
          title="Job"
          value={123123}
          percentage={123123}
          backgroundColor="bg-green-50"
        ></Card>
        <Card
          title="Apply"
          value={123123}
          percentage={123123}
          backgroundColor="bg-indigo-50"
        ></Card>
        <Card
          title="Balance"
          value={123123}
          percentage={123123}
          backgroundColor="bg-blue-50"
        ></Card>
      </div>
      <div className="md:flex justify-between w-full mt-5 md:gap-5">
        <div className="md:w-[50%]">
          <LineChart></LineChart>
        </div>
        <div className="md:w-[50%]">
          <TransactionList></TransactionList>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
