import Card from "../../component/Card/card";
import OrderTable from "../../component/Order/OrderTable";
import SalesChart from "../../component/Chart/SalesChart";
import { salesData, totals } from "../../data/salesData";
import { formatRupiah, formatDate } from "../../utils/formatters";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="layout">

      <main className="content">
        <header className="header">
          <h1>Dashboard Penjualan</h1>
          <span>{formatDate(new Date())}</span>
        </header>

        {/* SUMMARY */}
        <section className="stats">
          <Card title="Pendapatan" value={formatRupiah(totals.totalUang)} percent={100} />
          <Card title="Total Profit" value={formatRupiah(totals.profitRupiah)} percent={totals.profitPercent} />
          <Card title="Profit (%)" value={`${totals.profitPercent}%`} percent={totals.profitPercent} />
        </section>

        {/* CHART */}
        <section className="chart">
          <h2>Grafik Penjualan</h2>
          <SalesChart />
        </section>

        {/* OrderDetail */}
        <section className="orders">
          <OrderTable />
        </section>
        
      </main>
    </div>
  );
};

export default Dashboard;