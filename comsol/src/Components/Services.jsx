import React, { useState } from "react";
import { FaLaptopCode, FaPalette, FaSearch, FaPenFancy, FaEnvelopeOpenText, FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const services = [
  {
    title: "Website Design & Development",
    desc: "Websites to support sales, drive leads, sell online, automate back office functions, increase visibility, & communicate the quality of your offerings.",
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
    detail: "Our team creates stunning, responsive websites that represent your brand authentically. We combine design with cutting-edge technologies to deliver seamless user experiences that convert visitors into loyal customers. Whether you're launching an eCommerce store or building a custom solution, we bring your digital vision to life.",
  },
  {
    title: "UX, Visual Design & Branding",
    desc: "Cohesive brands and user experiences that reflect the quality of your offerings, increase conversions and turn prospects into customers.",
    icon: <FaPalette className="text-4xl text-blue-600 mb-4" />,
    detail: "We help your brand tell its story through intuitive UX, modern visuals, and thoughtful branding. Our team focuses on building emotional connections with users through meaningful design, ensuring consistent experiences across all digital touchpoints.",
  },
  {
    title: "Search Engine Optimization",
    desc: "Boost your online presence with our top-notch SEO services, improving rankings, driving organic traffic, and fueling business growth.",
    icon: <FaSearch className="text-4xl text-blue-600 mb-4" />,
    detail: "Our SEO strategies focus on keyword research, technical optimization, and high-quality content to improve visibility and authority. We ensure your website meets Google's standards and reaches the right audience, driving measurable business growth.",
  },
  {
    title: "Content Marketing",
    desc: "Providing strategic content marketing solutions to enhance brand visibility, engage audiences, and drive business growth.",
    icon: <FaPenFancy className="text-4xl text-blue-600 mb-4" />,
    detail: "We craft compelling content that informs, entertains, and persuades your audience. From blogs to whitepapers, our content team aligns messaging with your brand voice and marketing goals, turning readers into customers.",
  },
  {
    title: "Email Campaign Marketing",
    desc: "Efficient Email Campaign Marketing: Elevate your reach and engagement with expertly crafted email campaigns, tailored to maximize impact.",
    icon: <FaEnvelopeOpenText className="text-4xl text-blue-600 mb-4" />,
    detail: "Our email campaigns are data-driven, personalized, and conversion-optimized. From newsletters to product launches, we help you build relationships and retain customers through engaging and effective email communication.",
  },
  {
    title: "Social Media Marketing",
    desc: "Unlock online success through our Social Media Marketing: strategic content, wider reach, and deeper connections for your brand.",
    icon: <FaShareAlt className="text-4xl text-blue-600 mb-4" />,
    detail: "We manage your social media presence with tailored strategies for platforms like Facebook, Instagram, and LinkedIn. Our focus is on engagement, brand awareness, and driving conversions through targeted social efforts.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-tr from-blue-50 via-white to-blue-50">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-6">
          Our Services
        </h1>
        <p className="text-center text-blue-700 mb-14 max-w-3xl mx-auto text-lg">
          We offer full-spectrum digital services to help you grow your business through powerful online experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col cursor-pointer"
              onClick={() => handleToggle(idx)}
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-2 text-blue-700 hover:text-blue-900 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
              {openIndex === idx && (
                <div className="mt-4">
                  <p className="text-gray-600">{service.detail}</p>
                  <button
                    onClick={() => navigate("/contact")}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    Contact Us
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support & Quote Section */}
        <div className="mt-24 bg-blue-100 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">24/7 Support • Get a Free Quote</h2>
          <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
            Our team formulates successful content strategies for progressive businesses. We have a demonstrated history of elevating search engine rankings.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition"
          >
            Free Quote
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
