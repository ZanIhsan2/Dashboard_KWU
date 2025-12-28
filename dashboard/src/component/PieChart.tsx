import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface PieProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const PieChartComponent: React.FC<PieProps> = ({ data }) => (
  <PieChart width={300} height={300}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      fill="#8884d8"
      label
    />
    <Tooltip />
    <Legend />
  </PieChart>
);

export default PieChartComponent;