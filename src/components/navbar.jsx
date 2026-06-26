import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>

      <Link to="/menu">Menu</Link>

      <Link to="/orders">Orders</Link>

      <Link to="/billing">Billing</Link>

      <Link to="/invoices">Invoices</Link>
    </nav>
  );
}

export default Navbar;