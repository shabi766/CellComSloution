import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const solutions = [
  {
    title: "CellCom Guard",
    desc: "A complete cybersecurity platform that proactively protects your systems from internal and external threats with AI-driven detection and response.",
  },
  {
    title: "CellCom Desk",
    desc: "An all-in-one service desk solution for IT support teams, enhancing ticketing, automation, and employee satisfaction.",
  },
  {
    title: "CellCom Cloud",
    desc: "A scalable and secure cloud infrastructure that enables your business to deploy applications, store data, and collaborate effortlessly.",
  },
  {
    title: "CellCom Connect",
    desc: "A smart unified communications tool designed to streamline business conversations with VoIP, video, messaging, and more.",
  },
  {
    title: "CellCom SecureMail",
    desc: "Enterprise-grade email encryption and threat protection built to secure your organization's communication without complexity.",
  },
  {
    title: "CellCom Insight",
    desc: "An analytics platform that provides actionable insights from your operational data to optimize performance and support decision-making.",
  },
];

const Solutions = () => {
  return (
    <>
    <Navbar/>
   
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-tr from-blue-50 via-white to-blue-50">
      <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-6">
        Our Solutions
      </h1>
      <p className="text-center text-blue-700 mb-14 max-w-3xl mx-auto text-lg">
        Discover CellCom’s innovative product suite tailored to solve critical IT and business challenges across industries.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {solutions.map((solution, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 hover:text-blue-900 transition-colors duration-300">
              {solution.title}
            </h3>
            <p className="text-gray-700 flex-grow">{solution.desc}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />

     </>
  );
};

export default Solutions;
