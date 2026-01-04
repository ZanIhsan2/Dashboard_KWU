import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, FileText, Package, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Admin</h2>

      <nav>
        <NavLink to="/" end>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/reports">
          <FileText size={18} />
          Laporan
        </NavLink>

        <NavLink to="/products">
          <Package size={18} />
          Produk
        </NavLink>

        <NavLink to="/settings">
          <Settings size={18} />
          Pengaturan
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="avatar">A</div>
          <div>
            <p className="user-name">Admin</p>
            <span className="user-role">Administrator</span>
          </div>
        </div>

        <button className="logout-btn">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
