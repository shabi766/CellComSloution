import React from "react";
import Navbar from "./Navbar"; // Adjust the path if needed
import { HeartHandshake, Lightbulb, Users } from "lucide-react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-28 text-center">
          <h1 className="text-5xl font-extrabold max-w-4xl mx-auto px-4 leading-tight">
            About CellCom
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto px-4 text-blue-200 leading-relaxed">
            We are committed to delivering excellence in digital product development and innovation.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To empower businesses by creating innovative digital solutions that drive growth and efficiency.
            </p>

            <h2 className="text-3xl font-semibold text-blue-900 mt-16 mb-6">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To be the leading global partner for transformative technology and digital services.
            </p>
          </div>
          <div>
            <img
              src="/about.jpg"
              alt="Our Vision"
              className="rounded-3xl shadow-2xl object-cover w-full h-full max-h-[450px]"
              style={{ objectPosition: "center" }}
            />
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gradient-to-r from-blue-50 to-white py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-16 text-blue-900">
              What Drives Us
            </h2>
            <div className="grid md:grid-cols-3 gap-12 text-left">
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
                <HeartHandshake className="text-blue-600 mb-6 mx-auto" size={36} />
                <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
                  Integrity
                </h3>
                <p className="text-gray-700 text-center">
                  We uphold honesty, transparency, and ethics in everything we do.
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
                <Lightbulb className="text-blue-600 mb-6 mx-auto" size={36} />
                <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
                  Innovation
                </h3>
                <p className="text-gray-700 text-center">
                  We constantly explore new technologies to deliver creative solutions.
                </p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
                <Users className="text-blue-600 mb-6 mx-auto" size={36} />
                <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
                  Collaboration
                </h3>
                <p className="text-gray-700 text-center">
                  We believe great products come from strong teamwork and partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold max-w-3xl mx-auto px-4 mb-8 leading-snug">
            Ready to build something amazing with us?
          </h2>
          <Link to="/contact">
            <button className="bg-white text-blue-900 font-semibold px-10 py-4 rounded-2xl shadow-lg hover:bg-gray-100 transition duration-300">
              Contact Us
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
