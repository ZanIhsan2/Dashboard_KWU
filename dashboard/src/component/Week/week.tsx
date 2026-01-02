import "./week.css";

const Week = ({ title, keju, coklat, uang }: { title: string; keju: number; coklat: number; uang: number }) => (
  <div className="week">
    <h3>{title}</h3>
    <p>Keju: {keju} pcs</p>
    <p>Coklat: {coklat} pcs</p>
    <p>Total: {keju + coklat} pcs</p>
    <strong>{uang.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</strong>
  </div>
);

export default Week;