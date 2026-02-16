import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#222" }}>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", marginRight: "10px" }}>About</Link>
        <Link to="/contact" style={{ color: "white" }}>Contact</Link>
      </nav>

      <main style={{ padding: "20px" }}>{children}</main>
    </div>
  );
}

export default Layout;
