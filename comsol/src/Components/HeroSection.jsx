import React, { useState, useEffect } from "react";

const images = [
  "/hero-image.jpg",
  "/hero-image2.jpg",
  "/hero-image3.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-32 text-white"
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay to darken the background for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Grow your business with digital solutions
          </h1>
          <p className="text-lg mb-8 max-w-md">
            We craft tailored strategies and experiences that help your business grow, adapt, and stand out in a digital world.
          </p>
          <button className="px-8 py-3 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
