import React from "react";

const About = () => {
  return (
    <main className="bg-white">
      {/* Hero Banner */}
      <section className="bg-blue-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold max-w-4xl mx-auto px-4">
          About Orbito
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto px-4">
          We are committed to delivering excellence in digital product development and innovation.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To empower businesses by creating innovative digital solutions that drive growth and efficiency.
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To be the leading global partner for transformative technology and digital services.
          </p>
        </div>
        <div>
          <img
            src="/about-vision.jpg"
            alt="Our Vision"
            className="rounded-xl shadow-lg object-cover w-full h-full max-h-[400px]"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Integrity
              </h3>
              <p className="text-gray-700">
                We uphold honesty, transparency, and ethics in everything we do.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Innovation
              </h3>
              <p className="text-gray-700">
                We constantly explore new technologies to deliver creative solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-700">
                We believe great products come from strong teamwork and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold max-w-3xl mx-auto px-4 mb-6">
          Ready to build something amazing with us?
        </h2>
        <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-xl shadow hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default About;
