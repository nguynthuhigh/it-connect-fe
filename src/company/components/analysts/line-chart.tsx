import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Chart: React.FC = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          10000, 32000, 25000, 40000, 45000, 60000, 80000, 70000, 65000, 75000,
        ],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        pointHoverBorderColor: "#2563eb",
        pointHoverBackgroundColor: "#3b82f6",
        pointHoverRadius: 8,
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: [
          20000, 30000, 35000, 30000, 40000, 45000, 50000, 48000, 42000, 40000,
        ],
        borderColor: "#000000",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        pointHoverBorderColor: "#4b5563",
        pointHoverBackgroundColor: "#000000",
        pointHoverRadius: 8,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `$ ${context.raw?.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${(value as number) / 1000}k`,
        },
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    elements: {
      line: {
        borderWidth: 3,
        hoverBorderWidth: 5,
      },
      point: {
        radius: 4,
        hoverRadius: 8,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
