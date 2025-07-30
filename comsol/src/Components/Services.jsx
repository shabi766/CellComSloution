import React from "react";

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
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        At Orbito, we offer a comprehensive suite of services designed to support your organization’s digital evolution and operational efficiency.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
