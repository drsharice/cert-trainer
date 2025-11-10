import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const links = [
    { to: "/", label: "Home" },
    { to: "/dp900", label: "Microsoft DP-900" },
    { to: "/ai102", label: "Azure AI-102" },
    { to: "/gcp", label: "Google ML Engineer" },
  ];

  const baseLinkClass =
    "text-sm md:text-base transition border-b-2 border-transparent hover:text-emerald-600";
  const activeClass = "text-emerald-600 font-semibold border-emerald-600";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-black/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Title */}
        <h1 className="font-bold text-lg text-emerald-600">Cert Trainer</h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 relative">
          {/* Static Links */}
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${baseLinkClass} ${
                pathname === link.to ? activeClass : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Databricks Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("databricks")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`${baseLinkClass} ${
                pathname.startsWith("/databricks")
                  ? activeClass
                  : "text-gray-600"
              } flex items-center gap-1`}
            >
              Databricks ▾
            </button>

            <div
              className={`absolute right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-md py-2 z-50 transition-all duration-150 ${
                openMenu === "databricks"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link
                to="/databricks-fundamentals"
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 ${
                  pathname === "/databricks-fundamentals"
                    ? "font-semibold text-emerald-700 bg-emerald-50"
                    : ""
                }`}
              >
                Fundamentals
              </Link>
              <Link
                to="/databricks-architect"
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 ${
                  pathname === "/databricks-architect"
                    ? "font-semibold text-emerald-700 bg-emerald-50"
                    : ""
                }`}
              >
                Architect
              </Link>
            </div>
          </div>

          {/* Labs Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("labs")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`${baseLinkClass} ${
                pathname.startsWith("/labs") ? activeClass : "text-gray-600"
              } flex items-center gap-1`}
            >
              Labs ▾
            </button>

            <div
              className={`absolute right-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-md py-2 z-50 transition-all duration-150 ${
                openMenu === "labs"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link
                to="/labs/dp900-relational"
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 ${
                  pathname === "/labs/dp900-relational"
                    ? "font-semibold text-emerald-700 bg-emerald-50"
                    : ""
                }`}
              >
                DP-900: Relational Concepts
              </Link>
              <div className="px-4 py-2 text-sm text-gray-500 italic">
                More Labs Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
