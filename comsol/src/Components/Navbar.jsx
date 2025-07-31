import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "About", path: "/about-us" },
    { name: "Blogs", path: "/blogs" },
  ];

  const contactLink = { name: "Contact Us", path: "/contact" };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-20">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-sky-800 tracking-wide flex-shrink-0">
          CellCom Solutions
        </div>

        {/* Nav Links centered */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10 text-gray-800 font-medium">
          {navLinks.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`relative px-1 py-2 hover:text-sky-600 transition-colors duration-200 ${
                  isActive
                    ? "text-sky-900 font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-sky-600"
                    : ""
                }`}
              >
                {name}
              </Link>
            );
          })}
        </nav>

        {/* Contact Us button on right */}
        <div className="hidden md:flex flex-shrink-0 ml-auto">
          <Link
            to={contactLink.path}
            onClick={() => setMenuOpen(false)}
            className={`px-5 py-2 rounded-full font-semibold border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition duration-300 ${
              location.pathname === contactLink.path ? "bg-sky-600 text-white" : ""
            }`}
          >
            {contactLink.name}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-md px-4 py-4 space-y-3">
          {[...navLinks, contactLink].map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block text-gray-800 font-medium px-3 py-2 rounded-md ${
                  isActive ? "bg-sky-100 font-semibold" : "hover:bg-sky-50"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
