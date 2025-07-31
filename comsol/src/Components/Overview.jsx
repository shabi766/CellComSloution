import React from "react";

const Overview = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-100 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-3xl font-extrabold text-indigo-700 mb-4">
            Drive More Organic Traffic
          </h1>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Expert SEO Services for Business Growth
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At <span className="font-semibold text-indigo-600">CellCom Solution</span>, we deliver strategic and data-driven SEO services designed to elevate your rankings and visibility. Our approach focuses on sustainable growth and ROI-driven results through keyword research, on-page optimization, technical audits, and content enhancement.
          </p>
          <ul className="space-y-3 text-gray-800 text-base pl-4 list-disc">
            <li>🔑 Keyword Research & Strategy</li>
            <li>🧩 On-Page & Technical Optimization</li>
            <li>📈 Performance Tracking & Reporting</li>
            <li>📝 High-Quality Content Development</li>
            <li>🔗 Link Building & Authority Growth</li>
            <li>📊 Analytics & Continuous Improvement</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative group">
          <div className="w-full overflow-hidden rounded-xl shadow-2xl transform transition duration-500 group-hover:scale-105 group-hover:rotate-1">
            <img
              src="/overview.jpg"
              alt="SEO Overview"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
