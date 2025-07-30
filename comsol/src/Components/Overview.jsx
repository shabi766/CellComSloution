import React from "react";

const Overview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            An overview of our process
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Our end-to-end approach ensures that your product is built and launched efficiently. We work closely with you at each step, from concept to delivery.
          </p>
          <ul className="list-disc list-inside text-left text-gray-600 space-y-2">
            <li>Discovery & Planning</li>
            <li>Design & Prototyping</li>
            <li>Development & Testing</li>
            <li>Launch & Optimization</li>
          </ul>
        </div>
        <div>
          <img
            src="/overview-mockup.png"
            alt="overview"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
