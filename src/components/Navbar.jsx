import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";

function Navbar({ variant = "dark" }) {
  const location = useLocation();
  const isLight = variant === "light";
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Our Projects", path: "/projects" },
    { name: "Our People", path: "/people" },
    { name: "Case Study", path: "/case-study" },
    { name: "Investors", path: "/investors" },
  ];

  const NavLinksList = ({ onClick }) => (
    <>
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.name}
            to={link.path}
            onClick={onClick}
            className="text-sm font-medium rounded-[12px] block"
            style={
              isActive
                ? {
                    backgroundColor: "#F6EBFF",
                    border: "1px solid #EEDDFF",
                    color: "#5B2A9D",
                    padding: "10px 18px",
                  }
                : {
                    color: isLight ? "#374151" : "#D1D5DB",
                    padding: "10px 18px",
                  }
            }
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <>
      <nav
        className={`flex items-center justify-between px-4 md:px-8 py-3 md:py-4 relative ${
          isLight ? "bg-white/20 backdrop-blur-sm" : "bg-transparent"
        }`}
        style={
          isLight
            ? {
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow: "0px 2px 3px rgba(183,183,183,0.10)",
              }
            : {}
        }
      >
        <img
          src={isLight ? logoDark : logoLight}
          alt="KS Smart Technologies"
          className="h-8 md:h-10 w-auto"
        />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2 rounded-[14px] px-2 py-1">
          <NavLinksList />
        </div>

        <button className="hidden md:block bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium px-5 py-2 rounded-[14px]">
          Contact US
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 ${isLight ? "bg-gray-900" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 ${isLight ? "bg-gray-900" : "bg-white"}`} />
          <span className={`block w-6 h-0.5 ${isLight ? "bg-gray-900" : "bg-white"}`} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col gap-2 p-4 ${
            isLight ? "bg-white" : "bg-black"
          }`}
        >
          <NavLinksList onClick={() => setMenuOpen(false)} />
          <button className="bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-[14px] mt-2">
            Contact US
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;