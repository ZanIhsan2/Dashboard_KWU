import { Line } from "react-chartjs-2";
import { salesData } from "../../data/salesData";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // karena hanya 1 dataset
    },
    title: {
      display: true,
      text: "Total Pembeli per Minggu (Line Chart)",
    },
  },
};

const SalesChart = () => {
  const chartData = {
    labels: ["Minggu 1", "Minggu 2", "Minggu 3"],
    datasets: [
      {
        label: "Total Pembeli",
        data: [
          salesData.minggu1.keju + salesData.minggu1.coklat,
          salesData.minggu2.keju + salesData.minggu2.coklat,
          salesData.minggu3.keju + salesData.minggu3.coklat,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3, // bikin garis agak melengkung
        fill: true,   // area di bawah garis diwarnai
      },
    ],
  };

  return <Line data={chartData} options={options} />;
};

export default SalesChart;