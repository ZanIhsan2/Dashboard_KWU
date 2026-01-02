import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">MySales</h2>
      <nav>
        <a className="active">Dashboard</a>
        <a>Laporan</a>
        <a>Produk</a>
        <a>Pengaturan</a>
      </nav>
    </aside>
  );
};

export default Sidebar;