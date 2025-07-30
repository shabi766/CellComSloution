import React from "react";
import { Rocket, Target, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Rocket size={32} className="text-blue-600" />,
    title: "Fast Delivery",
    description:
      "We work efficiently to deliver high-quality solutions quickly without compromising on quality.",
  },
  {
    icon: <Target size={32} className="text-blue-600" />,
    title: "Strategic Approach",
    description:
      "Every project is guided by a clear strategy aligned with your business goals.",
  },
  {
    icon: <ShieldCheck size={32} className="text-blue-600" />,
    title: "Reliable Support",
    description:
      "Our team is always here to provide support and ensure your success beyond launch.",
  },
];

const WhyOrbitoWorks = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Why Orbito Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrbitoWorks;
