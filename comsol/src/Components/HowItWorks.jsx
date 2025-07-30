import React from "react";

const steps = [
  {
    number: "1",
    title: "Tell us your vision",
    description:
      "Share your goals, challenges, and what you hope to achieve. We’ll listen carefully.",
  },
  {
    number: "2",
    title: "Get the right team",
    description:
      "We assemble a team of skilled professionals who fit your project and understand your needs.",
  },
  {
    number: "3",
    title: "Launch & evolve",
    description:
      "From MVP to scale, we work iteratively to build, launch, and improve your product.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
