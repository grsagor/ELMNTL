import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Header / Navbar */}
      <header style={{ padding: "10px", background: "#f4f4f4" }}>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Page Content */}
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* This is where nested pages will render */}
      </main>

      {/* Footer */}
      <footer style={{ padding: "10px", background: "#f4f4f4", marginTop: "20px" }}>
        <p>© {new Date().getFullYear()} My Website</p>
      </footer>
    </div>
  );
}
