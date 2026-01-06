import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products";
import Laporan from "./pages/Laporan/laporan";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/laporan" element={<Laporan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;