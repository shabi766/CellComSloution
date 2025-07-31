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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-14 tracking-tight">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl font-extrabold text-indigo-600 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
