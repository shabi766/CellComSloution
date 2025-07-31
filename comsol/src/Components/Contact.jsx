import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
    
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-tr from-indigo-50 to-white rounded-3xl shadow-lg">
      <h1 className="text-5xl font-extrabold text-center text-indigo-900 mb-6">
        Contact Us
      </h1>
      <p className="text-center text-indigo-700 mb-16 max-w-3xl mx-auto text-lg">
        Need help or have questions? Reach out and our team will get back to you promptly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Contact Info */}
        <div className="space-y-10 bg-white p-10 rounded-3xl shadow-md">
          <div className="flex items-start gap-4">
            <Phone size={28} className="text-indigo-600 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-1">Phone</h3>
              <p className="text-indigo-700 text-lg">+1 585 4085017</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail size={28} className="text-indigo-600 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-1">Email</h3>
              <p className="text-indigo-700 text-lg">cellcomsolutions2016@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin size={28} className="text-indigo-600 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-indigo-900 mb-1">Head Office</h3>
              <address className="not-italic text-indigo-700 text-lg leading-relaxed">
                4940 Estes Ave <br />
                Skokie, Illinois <br />
                60077
              </address>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-8 bg-white p-10 rounded-3xl shadow-xl">
          <div>
            <label className="block text-indigo-900 font-semibold mb-2 text-lg">Full Name</label>
            <input
              type="text"
              className="w-full border border-indigo-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-900 font-semibold mb-2 text-lg">Email Address</label>
            <input
              type="email"
              className="w-full border border-indigo-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-indigo-900 font-semibold mb-2 text-lg">Message</label>
            <textarea
              rows="5"
              className="w-full border border-indigo-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
