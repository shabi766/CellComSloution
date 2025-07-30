import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p>123 Orbito Street</p>
          <p>San Francisco, CA 94105</p>
          <p>Email: contact@orbito.com</p>
          <p>Phone: +1 (415) 123-4567</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500 transition">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-500 transition">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-500 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-500 transition">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Orbito Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
