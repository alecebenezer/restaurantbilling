import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Menu from "./pages/Menu";
import Orders from "./pages/orders";
import Billing from "./pages/billing";
import Invoices from "./pages/invoices";
import OrderScreen from "./pages/orderscreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/order" element={<OrderScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;