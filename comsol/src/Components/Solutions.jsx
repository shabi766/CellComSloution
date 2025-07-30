import React from "react";

const solutions = [
  {
    title: "Orbito Guard",
    desc: "A complete cybersecurity platform that proactively protects your systems from internal and external threats with AI-driven detection and response.",
  },
  {
    title: "Orbito Desk",
    desc: "An all-in-one service desk solution for IT support teams, enhancing ticketing, automation, and employee satisfaction.",
  },
  {
    title: "Orbito Cloud",
    desc: "A scalable and secure cloud infrastructure that enables your business to deploy applications, store data, and collaborate effortlessly.",
  },
  {
    title: "Orbito Connect",
    desc: "A smart unified communications tool designed to streamline business conversations with VoIP, video, messaging, and more.",
  },
  {
    title: "Orbito SecureMail",
    desc: "Enterprise-grade email encryption and threat protection built to secure your organization's communication without complexity.",
  },
  {
    title: "Orbito Insight",
    desc: "An analytics platform that provides actionable insights from your operational data to optimize performance and support decision-making.",
  },
];

const Solutions = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Our Solutions</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover Orbito’s innovative product suite tailored to solve critical IT and business challenges across industries.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">
              {solution.title}
            </h3>
            <p className="text-gray-600">{solution.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
