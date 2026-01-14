import { useState } from "react";
import { ordersData } from "../../data/orderData";
import "./orderTable.css";

const OrderTable = () => {
  const [filter, setFilter] = useState("all");

  // definisi range minggu
  const weekRanges: Record<string, string[]> = {
    "minggu1": ["11/28/2025"], // bisa ditambah range tanggal lain
    "minggu2": ["12/06/2025"],
    // kalau ada minggu3, tambahkan di sini
  };

  // filter data
  const filteredOrders =
    filter === "all"
      ? ordersData
      : ordersData.filter((o) => weekRanges[filter].includes(o.tanggal));

  return (
    <div className="order-table">
      <h2>Detail Pesanan</h2>

      {/* Dropdown filter */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="minggu1">Minggu 1</option>
        <option value="minggu2">Minggu 2</option>
      </select>

      {/* Tabel pesanan */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Nama Pelanggan</th>
            <th>Keju</th>
            <th>Coklat</th>
            <th>Jumlah</th>
            <th>Harga/4pcs</th>
            <th>Total</th>
            <th>Pembayaran</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, idx) => {
            const jumlah = order.keju + order.coklat;

            const hargaPerPaket = 10000;
            const isiPaket = 4;

            const jumlahPaket = Math.ceil(jumlah / isiPaket);
            const total = jumlahPaket * hargaPerPaket;

            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{order.tanggal}</td>
                <td>{order.nama}</td>
                <td>{order.keju} pcs</td>
                <td>{order.coklat} pcs</td>
                <td>{jumlah} pcs</td>
                <td>Rp{hargaPerPaket.toLocaleString("id-ID")}</td>
                <td>Rp{total.toLocaleString("id-ID")}</td>
                <td>{order.pembayaran}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;