import OrderTable from "../../component/Order/OrderTable";
import PaymentChart from "../../component/Chart/PaymentChart";
import { ordersData } from "../../data/orderData";
import { formatRupiah, formatDate } from "../../utils/formatters";
import "./laporan.css";

const Laporan = () => {
  const totalPendapatan = ordersData.reduce(
    (total, order) => total + order.harga,
    0
  );

  const totalPesanan = ordersData.length;

  const cash = ordersData.filter(
    (order) => order.pembayaran === "Cash"
  ).length;

  const transfer = ordersData.filter(
    (order) => order.pembayaran === "Transfer"
  ).length;

  return (
    <div className="layout">
      <main className="content">
        {/* HEADER */}
        <header className="header">
          <h1>Laporan</h1>
          <span>{formatDate(new Date())}</span>
        </header>

        {/* SUMMARY */}
        <section className="report-summary">
          <div className="card">
            <p>Total Penjualan</p>
            <h2>{formatRupiah(totalPendapatan)}</h2>
          </div>

          <div className="card">
            <p>Total Pesanan</p>
            <h2>{totalPesanan}</h2>
          </div>

          <div className="card">
            <p>Metode Pembayaran Dominan</p>
            <h2>{cash > transfer ? "Cash" : "Transfer"}</h2>
          </div>
        </section>

        {/* CHART */}
        <section className="payment-insight">
            <div className="insight-card">
                <h3>Distribusi Pembayaran</h3>
                <div className="payment-chart">
                  <PaymentChart cash={cash} transfer={transfer}/>
                </div>
            </div>
        </section>

        {/* ORDER DETAIL */}
        <section className="orders">
          <OrderTable />
        </section>
      </main>
    </div>
  );
};

export default Laporan;