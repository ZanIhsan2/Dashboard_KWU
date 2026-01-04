import Sidebar from "../component/Sidebar/sidebar";
import { Outlet } from "react-router-dom";
import "./dashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;