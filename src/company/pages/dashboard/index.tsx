import React from "react";
// import PieChart from "../../components/analysts/pie-chart";
import Card from "../../components/analysts/card";
import LineChart from "../../components/analysts/line-chart";
import TransactionList from "../../components/analysts/list";
import { useQuery } from "@tanstack/react-query";
import {
  getDashboardAPI,
  IGetDashboard,
} from "../../services/api/analysts.api";

const Dashboard: React.FC = () => {
  const { data } = useQuery<IGetDashboard>({
    queryKey: ["dashboard-total"],
    queryFn: () => getDashboardAPI(),
  });
  return (
    <div className="font-inter">
      {/* <PieChart></PieChart> */}
      <div className="grid grid-cols-4 gap-5  max-md:grid-cols-2">
        <Card
          title="Balance"
          value={data?.balance || 0}
          percentage={0}
          prefix={"ITC "}
          backgroundColor="bg-orange-50"
        ></Card>
        <Card
          title="Job"
          value={data?.totalJobs || 0}
          percentage={0}
          backgroundColor="bg-green-50"
        ></Card>
        <Card
          title="Apply"
          value={data?.totalApplies || 0}
          percentage={0}
          backgroundColor="bg-indigo-50"
        ></Card>
        <Card
          title="Transactions"
          value={data?.totalTransactions || 0}
          percentage={0}
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
