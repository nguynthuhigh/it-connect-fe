import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCard: React.FC = () => {
  interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      hoverBackgroundColor: string[];
    }[];
  }

  const data: ChartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 7],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const totalPlugin: Plugin<"doughnut"> = {
    id: "total",
    beforeDraw: (chart) => {
      const { width, height } = chart;
      const ctx = chart.ctx;
      ctx.save();

      const total = chart.data.datasets[0].data.reduce(
        (acc, value) => acc + value,
        0
      );
      ctx.font = "20px Arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "#000";
      ctx.fillText(`Total: ${total}`, width / 2, height / 2);
      ctx.restore();
    },
  };

  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        margin: "auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3>Card Title</h3>
      <Doughnut data={data} plugins={[totalPlugin]} />
    </div>
  );
};

export default ChartCard;
