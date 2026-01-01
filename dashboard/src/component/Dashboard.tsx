import Sidebar from "./sidebar";
import "./dashboard.css";

const Dashboard = () => {
  const data = {
    minggu1: { keju: 22, coklat: 30, uang: 130000 },
    minggu2: { keju: 24, coklat: 28, uang: 130000 },
  };

  const totalKeju = data.minggu1.keju + data.minggu2.keju;
  const totalCoklat = data.minggu1.coklat + data.minggu2.coklat;
  const totalProduk = totalKeju + totalCoklat;
  const totalUang = data.minggu1.uang + data.minggu2.uang;

  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <header className="header">
          <h1>Dashboard Penjualan</h1>
          <span>{new Date().toLocaleDateString()}</span>
        </header>

        {/* SUMMARY */}
        <section className="stats">
          <Card title="Total Produk" value={`${totalProduk} pcs`} percent={100} />
          <Card title="Pendapatan" value={`Rp ${totalUang.toLocaleString()}`} percent={100} />
          <Card title="Keju Terjual" value={`${totalKeju} pcs`} percent={45} />
          <Card title="Coklat Terjual" value={`${totalCoklat} pcs`} percent={55} />
        </section>

        {/* WEEKLY */}
        <section className="weekly">
          <Week title="Minggu 1" {...data.minggu1} />
          <Week title="Minggu 2" {...data.minggu2} />
        </section>
      </main>
    </div>
  );
};

const Card = ({
  title,
  value,
  percent,
}: {
  title: string;
  value: string;
  percent: number;
}) => (
  <div className="card">
    <p>{title}</p>
    <h2>{value}</h2>
    <div className="progress">
      <div style={{ width: `${percent}%` }} />
    </div>
  </div>
);

const Week = ({
  title,
  keju,
  coklat,
  uang,
}: {
  title: string;
  keju: number;
  coklat: number;
  uang: number;
}) => (
  <div className="week">
    <h3>{title}</h3>
    <p>Keju: {keju} pcs</p>
    <p>Coklat: {coklat} pcs</p>
    <p>Total: {keju + coklat} pcs</p>
    <strong>Rp {uang.toLocaleString()}</strong>
  </div>
);

export default Dashboard;
