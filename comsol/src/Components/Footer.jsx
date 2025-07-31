import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
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
          <p className="mb-1">Skoke, Illinois 60077</p>
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

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white tracking-wide">
            Follow Us
          </h3>
          <div className="flex space-x-8">
            {[{
              icon: <Facebook size={28} />,
              url: "https://facebook.com",
              label: "Facebook",
            },{
              icon: <Twitter size={28} />,
              url: "https://twitter.com",
              label: "Twitter",
            },{
              icon: <Linkedin size={28} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },{
              icon: <Instagram size={28} />,
              url: "https://instagram.com",
              label: "Instagram",
            }].map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 text-center text-gray-400 text-sm tracking-wide select-none">
        &copy; {new Date().getFullYear()} CellCom Solutions Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
