import { Line } from "react-chartjs-2";
import { salesData } from "../../data/salesData";
import "./SalesChart.css";

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
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
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

  return (
    <div className="sales-chart-wrapper">
      {/* KIRI: CHART */}
      <div className="sales-chart-container">
        <Line data={chartData} options={options} />
      </div>

      {/* KANAN: INFO */}
      <div className="sales-chart-info">
        <h3>Ringkasan Penjualan</h3>

        <p><strong>Total Pembeli:</strong>  { 
          chartData.datasets[0].data.reduce((a, b) => a + b, 0)
        }</p>

        <p><strong>Minggu Tertinggi:</strong> Minggu 3</p>
        <p><strong>Rata-rata / Minggu:</strong> { 
          Math.round(
            chartData.datasets[0].data.reduce((a, b) => a + b, 0) / 3
          )
        }</p>

        <p className="trend-up">📈 Tren penjualan meningkat</p>
      </div>
    </div>
  );
};

export default SalesChart;