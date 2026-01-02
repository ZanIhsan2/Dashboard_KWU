import "./card.css";

const Card = ({ title, value, percent }: { title: string; value: string; percent: number }) => (
  <div className="card">
    <p>{title}</p>
    <h2>{value}</h2>
    <div className="progress">
      <div style={{ width: `${percent}%` }} />
    </div>
  </div>
);

export default Card;