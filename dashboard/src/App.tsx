import React from "react";
import Metrics from "./component/Metrics";
import PieChartComponent from "./component/PieChart";
import LineChartComponent from "./component/LineChart";
import TableComponent from "./component/Table";
import salesData from "./data/sales.json";

const App = () => {
  const totalOmzet = salesData.reduce((acc, curr) => acc + curr.amount, 0);

  const pieData = [
    { name: "Keju", value: 50 },
    { name: "Coklat", value: 30 },
    { name: "Mix", value: 20 },
  ];

  const lineData = [
    { week: "Minggu 1", value: 50 },
    { week: "Minggu 2", value: 30 },
    { week: "Minggu 3", value: 20 },
    { week: "Minggu 4", value: 50 },
  ];

  // return (
  //   <div className="p-8 bg-gray-100 min-h-screen">
  //     <h1 className="text-3xl font-bold mb-6">Dashboard Penjualan Ubi Ungu Lumer</h1>

  //     {/* Metrics */}
  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
  //       <Metrics title="Total Omzet" value={totalOmzet} />
  //     </div>

  //     {/* Charts */}
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //       <PieChartComponent data={pieData} />
  //       <LineChartComponent data={lineData} />
  //     </div>

  //     {/* Table */}
  //     <TableComponent data={salesData} />
  //   </div>
  // );

  return (
    <div>
      <h1>Test Render</h1>
    </div>
  );

};

export default App;