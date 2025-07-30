import React, { useState } from "react";

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 cursor-pointer bg-white shadow"
              onClick={() => toggle(idx)}
            >
              <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                {faq.question}
                <span>{openIndex === idx ? "−" : "+"}</span>
              </h3>
              {openIndex === idx && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
