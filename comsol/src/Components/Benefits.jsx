import React from "react";

const benefits = [
  {
    title: "Reduce Time to Market",
    description:
      "Launch faster by leveraging our rapid development and design processes.",
  },
  {
    title: "Lower Risk",
    description:
      "Work with a trusted partner who’s built dozens of products from scratch.",
  },
  {
    title: "Focus on Your Core",
    description:
      "Let us handle tech delivery so you can focus on strategy, sales, and growth.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 tracking-tight">
          The CellCome Advantage
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
