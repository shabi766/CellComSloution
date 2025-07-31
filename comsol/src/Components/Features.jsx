import React from "react";

const features = [
  {
    title: "Top-Tier Talent",
    description:
      "We hire and retain only the best engineers, designers, and product minds.",
  },
  {
    title: "Fast Ramp-up",
    description:
      "We onboard quickly and start contributing within days, not weeks.",
  },
  {
    title: "Scalable Teams",
    description:
      "Whether you need one developer or a full product team, we scale as needed.",
  },
  {
    title: "Global Delivery",
    description:
      "We combine global reach with local understanding to deliver on time and on budget.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
