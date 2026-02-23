import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/Logo_Orange.png";

const Navbar = () => {
  const location = useLocation();

  const { theme, setTheme } = useTheme();

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

      {/* Nav links + theme toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
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
      </div>
    </nav>
  );
};

export default Navbar;
