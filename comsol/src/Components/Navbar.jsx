import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-sky-800 tracking-wide">CellCom Solutions</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-sky-600 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-md px-4 py-4 space-y-3">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="block text-gray-800 font-medium hover:text-sky-600"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
