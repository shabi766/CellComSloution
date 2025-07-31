import React from "react";
import { Rocket, Target, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Rocket size={32} className="text-blue-500" />,
    title: "Fast Delivery",
    description:
      "We work efficiently to deliver high-quality solutions quickly without compromising on quality.",
  },
  {
    icon: <Target size={32} className="text-blue-500" />,
    title: "Strategic Approach",
    description:
      "Every project is guided by a clear strategy aligned with your business goals.",
  },
  {
    icon: <ShieldCheck size={32} className="text-blue-500" />,
    title: "Reliable Support",
    description:
      "Our team is always here to provide support and ensure your success beyond launch.",
  },
];

const WhyOrbitoWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-14">
          Why CellCom Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-6 transition-all hover:-translate-y-1 hover:shadow-2xl duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrbitoWorks;
