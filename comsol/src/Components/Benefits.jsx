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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">The Orbito Advantage</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-6 border rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
