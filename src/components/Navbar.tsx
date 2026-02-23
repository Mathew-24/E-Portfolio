import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/Logo_White.png";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-background border-b border-border">
      {/* Logo placeholder */}
      <Link to="/">
        <img src={logo} alt="Logo" className="w-14 h-14 rounded-full object-cover" />
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
