import React from "react";

interface MetricsProps {
  title: string;
  value: number;
}

const Metrics: React.FC<MetricsProps> = ({ title, value }) => (
  <div className="p-4 bg-white shadow rounded">
    <h3 className="text-gray-500">{title}</h3>
    <p className="text-2xl font-bold">{value.toLocaleString()}</p>
  </div>
);

export default Metrics;