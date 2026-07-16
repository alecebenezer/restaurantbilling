import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#222",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link
        to="/dashboard"
        style={{ color: "white", textDecoration: "none" }}
      >
        Dashboard
      </Link>

      <Link
        to="/menu"
        style={{ color: "white", textDecoration: "none" }}
      >
        Menu
      </Link>
    </nav>
  );
}

export default Navbar;