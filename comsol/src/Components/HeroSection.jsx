import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Grow your business with digital solutions
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We craft tailored strategies and experiences that help your business grow, adapt, and stand out in a digital world.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://orbitoinc.com/_next/image?url=%2Fhero-image.png&w=1200&q=75"
            alt="Hero"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
