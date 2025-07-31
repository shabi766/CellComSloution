import React from "react";

const Overview = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            An Overview of Our Process
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Our end-to-end approach ensures your product is built and launched
            efficiently. We work closely with you at each step—from concept to
            delivery.
          </p>
          <ul className="space-y-3 text-gray-800 text-base pl-4 list-disc">
            <li>🔍 Discovery & Planning</li>
            <li>🎨 Design & Prototyping</li>
            <li>💻 Development & Testing</li>
            <li>🚀 Launch & Optimization</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative group">
          <div className="w-full overflow-hidden rounded-xl shadow-2xl transform transition duration-500 group-hover:scale-105 group-hover:rotate-1">
            <img
              src="/overview.jpg"
              alt="Overview"
              className="w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
