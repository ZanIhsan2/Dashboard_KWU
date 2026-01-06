import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  cash: number;
  transfer: number;
}

const PaymentChart = ({ cash, transfer }: Props) => {
  const data = {
    labels: ["Cash", "Transfer"],
    datasets: [
      {
        data: [cash, transfer],
        backgroundColor: [
          "#22c55e", // hijau
          "#6366f1", // biru
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "65%",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 16,
          font:{
            size: 13,
          }
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default PaymentChart;