import "./Product.css";

import ProductDistributionChart from "../../component/Chart/ProductDistribution";
import { formatDate } from "../../utils/formatters";
import { salesData, totals } from "../../data/salesData";

const Products = () => {
  const bestProduct =
    totals.totalKeju > totals.totalCoklat ? "Keju" : "Coklat";

  return (
    <div className="products-page">

      {/* HEADER */}
      <header className="products-header">
        <h1 className="page-title">Produk</h1>

        <div className="header-actions">
          <span className="page-date">{formatDate(new Date())}</span>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="stats">
        <div className="card highlight">
          <p>Total Produk Terjual</p>
          <h2>{totals.totalProduk}</h2>
        </div>

        <div className="card">
          <p>Keju Terjual</p>
          <h2>{totals.totalKeju}</h2>
        </div>

        <div className="card">
          <p>Coklat Terjual</p>
          <h2>{totals.totalCoklat}</h2>
        </div>

        <div className="card">
          <p>Produk Terlaris</p>
          <h2>{bestProduct}</h2>
        </div>
      </section>

      {/* INSIGHT */}
      <section className="product-insight">
        <div className="insight-card">
            <h3>Distribusi Produk</h3>
            <div className="distribution-chart">
            <ProductDistributionChart
                keju={totals.totalKeju}
                coklat={totals.totalCoklat}
            />
            </div>
        </div>

        <div className="insight-card">
            <h3>Tren Penjualan Mingguan</h3>

            <div className="weekly-trend">
                <div className="week-item">
                <span>Minggu 1</span>
                <div className="bar">
                    <div
                    className="bar-fill keju"
                    style={{ width: `${salesData.minggu1.keju * 2}%` }}
                    />
                    <div
                    className="bar-fill coklat"
                    style={{ width: `${salesData.minggu1.coklat * 2}%` }}
                    />
                </div>
                <small>Keju {salesData.minggu1.keju} · Coklat {salesData.minggu1.coklat}</small>
                </div>

                <div className="week-item">
                <span>Minggu 2</span>
                <div className="bar">
                    <div
                    className="bar-fill keju"
                    style={{ width: `${salesData.minggu2.keju * 2}%` }}
                    />
                    <div
                    className="bar-fill coklat"
                    style={{ width: `${salesData.minggu2.coklat * 2}%` }}
                    />
                </div>
                <small>Keju {salesData.minggu2.keju} · Coklat {salesData.minggu2.coklat}</small>
                </div>

                <div className="week-item">
                <span>Minggu 3</span>
                <div className="bar">
                    <div
                    className="bar-fill keju"
                    style={{ width: `${salesData.minggu3.keju * 2}%` }}
                    />
                    <div
                    className="bar-fill coklat"
                    style={{ width: `${salesData.minggu3.coklat * 2}%` }}
                    />
                </div>
                <small>Keju {salesData.minggu3.keju} · Coklat {salesData.minggu3.coklat}</small>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Products;