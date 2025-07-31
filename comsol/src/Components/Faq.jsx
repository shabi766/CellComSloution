import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you start on my project?",
    answer:
      "We can typically start within 1-2 weeks depending on project complexity and current workload.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer ongoing maintenance and support packages tailored to your needs.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience across tech, healthcare, finance, and e-commerce among others.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => toggle(idx)}
            >
              <div className="flex justify-between items-center text-blue-800">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-500" />
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </div>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                )}
              </div>
              {openIndex === idx && (
                <p className="mt-3 text-gray-700 transition-opacity duration-300 ease-in-out">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
