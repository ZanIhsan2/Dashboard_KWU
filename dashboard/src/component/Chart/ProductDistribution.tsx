import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  keju: number;
  coklat: number;
}

const ProductDistributionChart = ({ keju, coklat }: Props) => {
  const data = {
    labels: ["Keju", "Coklat"],
    datasets: [
      {
        data: [keju, coklat],
        backgroundColor: ["#6366f1", "#f59e0b"],
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
          font: {
            size: 13,
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default ProductDistributionChart;