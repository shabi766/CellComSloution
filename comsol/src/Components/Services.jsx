import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const services = [
  {
    title: "Managed Services",
    desc: "We handle your IT infrastructure and operations, so you can focus on your core business while we ensure efficiency, security, and uptime.",
  },
  {
    title: "Technology Consulting",
    desc: "Our experts offer strategic guidance to align your technology with business goals, driving growth and innovation through smart solutions.",
  },
  {
    title: "IT Staff Augmentation",
    desc: "Boost your team with skilled professionals to fill talent gaps and accelerate your projects without long-term commitments.",
  },
  {
    title: "Cybersecurity Services",
    desc: "We protect your digital assets with tailored cybersecurity solutions including assessments, threat monitoring, and compliance.",
  },
  {
    title: "Cloud Solutions",
    desc: "We design, migrate, and manage cloud infrastructures to help your business scale with agility and cost efficiency.",
  },
  {
    title: "Digital Transformation",
    desc: "We help businesses modernize their operations and embrace the future through innovative technology and process automation.",
  },
];

const Services = () => {
  return (
    <>
    <Navbar/>
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-tr from-blue-50 via-white to-blue-50">
      <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-6">
        Our Services
      </h1>
      <p className="text-center text-blue-700 mb-14 max-w-3xl mx-auto text-lg">
        At CellCom, we offer a comprehensive suite of services designed to support your organization’s digital evolution and operational efficiency.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 hover:text-blue-900 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-700 flex-grow">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Services;
