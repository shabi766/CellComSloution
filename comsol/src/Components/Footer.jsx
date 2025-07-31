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
            <span className="font-semibold">Email:</span> cellcomsolutions2016@gmail.com
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
              { name: "Terms & Conditions", path: "/policies/terms" },
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

      {/* Payment Icons */}
      <div className="mt-10 flex justify-center gap-6 items-center">
        {[
          {
            alt: "Visa",
            src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visa.svg",
          },
          {
            alt: "Mastercard",
            src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mastercard.svg",
          },
          {
            alt: "PayPal",
            src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg",
          },
          {
            alt: "American Express",
            src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/americanexpress.svg",
          },
          {
            alt: "Google Pay",
            src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlepay.svg",
          },
          {
            alt: "Apple Pay",
            src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/applepay.svg",
          },
        ].map(({ alt, src }) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            className="w-10 h-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
            title={alt}
          />
        ))}
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm tracking-wide select-none">
        &copy; {new Date().getFullYear()} CellCom Solution Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
