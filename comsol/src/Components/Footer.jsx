import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white tracking-wide">
            Contact Us
          </h3>
          <p className="mb-1">4940 Estes Ave</p>
          <p className="mb-1">Skokie, Illinois 60077</p>
          <p className="mb-1">
            <span className="font-semibold">Email:</span> contact@CellCom.com
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +1 585 4085017
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about-us" },
              { name: "Services", path: "/services" },
              { name: "Solutions", path: "/solutions" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-blue-500 transition-colors duration-300 font-medium capitalize"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white tracking-wide">
            Policies
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Refund Policy", path: "/policies/refund" },
              { name: "Privacy Policy", path: "/policies/privacy" },
              { name: "Terms & Conditions", path: "/policies/terms" }, // for next prompt
            ].map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-blue-500 transition-colors duration-300 font-medium"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 text-center text-gray-400 text-sm tracking-wide select-none">
        &copy; {new Date().getFullYear()} CellCom Solution Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
