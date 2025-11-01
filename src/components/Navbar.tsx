import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/dp900", label: "Microsoft DP-900" },
    { to: "/ai102", label: "Azure AI-102" },
    { to: "/gcp", label: "Google ML Engineer" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-black/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="font-bold text-lg text-emerald-600">Cert Trainer</h1>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm md:text-base transition ${
                pathname === link.to
                  ? "text-emerald-600 font-semibold border-b-2 border-emerald-600"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
