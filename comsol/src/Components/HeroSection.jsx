import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Images and matching text
const slides = [
  {
    image: "/hero-image.jpg",
    heading: "An Innovative Digital Marketing Company",
    subheading:
      "We take your business to a new height with the help of our world-class services.",
  },
  {
    image: "/hero-image2.jpg",
    heading: "Building Your Online Presence",
    subheading:
      "We empower your brand with cutting-edge design, content, and SEO solutions.",
  },
  {
    image: "/hero-image3.jpg",
    heading: "Brands and Integrated Strategies",
    subheading:
      "Our team crafts impactful, scalable strategies tailored for your business goals.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const { image, heading, subheading } = slides[current];

  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center text-white transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
        <p className="text-base md:text-lg mb-8">{subheading}</p>

        <Link to="/Contact us">
          <button className="bg-white text-blue-900 font-semibold px-8 py-3 md:px-10 md:py-4 rounded-2xl shadow-lg hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
