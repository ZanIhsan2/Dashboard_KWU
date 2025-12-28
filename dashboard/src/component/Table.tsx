import React from "react";

interface TableProps {
  data: { tanggal: string; varian: string; porsi: number; amount: number }[];
}

const TableComponent: React.FC<TableProps> = ({ data }) => (
  <div className="overflow-x-auto mt-4">
    <table className="table-auto w-full bg-white shadow rounded">
      <thead>
        <tr>
          <th className="px-4 py-2">Tanggal</th>
          <th className="px-4 py-2">Varian</th>
          <th className="px-4 py-2">Jumlah Porsi</th>
          <th className="px-4 py-2">Total (Rp)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="text-center border-t">
            <td className="px-4 py-2">{row.tanggal}</td>
            <td className="px-4 py-2">{row.varian}</td>
            <td className="px-4 py-2">{row.porsi}</td>
            <td className="px-4 py-2">{row.amount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableComponent;