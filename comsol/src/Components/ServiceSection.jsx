import React from "react";
import {
  FaEnvelopeOpenText,
  FaBullhorn,
  FaPenNib,
  FaLaptopCode,
  FaThumbsUp,
  FaSearch
} from "react-icons/fa";

const services = [
  {
    icon: <FaEnvelopeOpenText size={40} className="text-blue-600" />,
    title: "Email Marketing",
    description:
      "Engage your customers directly through personalized, targeted email campaigns that convert and retain."
  },
  {
    icon: <FaBullhorn size={40} className="text-red-500" />,
    title: "Digital Marketing",
    description:
      "Boost your business visibility with strategic, multi-channel digital campaigns that drive measurable growth."
  },
  {
    icon: <FaPenNib size={40} className="text-green-600" />,
    title: "Content Marketing",
    description:
      "Deliver value and establish authority through impactful storytelling and creative content creation."
  },
  {
    icon: <FaLaptopCode size={40} className="text-purple-600" />,
    title: "Website Design & Development",
    description:
      "Create stunning, responsive, and high-performing websites tailored to your brand's goals."
  },
  {
    icon: <FaThumbsUp size={40} className="text-pink-600" />,
    title: "Social Media Marketing",
    description:
      "Build a strong online presence and connect with your audience through strategic social campaigns."
  },
  {
    icon: <FaSearch size={40} className="text-yellow-600" />,
    title: "Search Engine Optimization",
    description:
      "Enhance your website’s visibility and rank higher on search engines with cutting-edge SEO strategies."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg">
          We offer a wide range of services to help your business grow and succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
