import React from "react";

const Aboutus = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/about-us.png" // Replace with your actual image path
            alt="About CellCom"
            className="w-full rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About CellCom Solutions
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            CellCom Solution is a leading web development and results-driven
            digital marketing company. We specialize in design, development,
            CMS, eCommerce, digital marketing, and branding, helping businesses
            expand their online presence.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a strong global client base and repeat customers, we are
            inspired to push creative boundaries. By understanding each
            client’s business and market potential, we craft and implement
            strategic solutions aligned with the latest industry trends—taking
            businesses to new heights in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
