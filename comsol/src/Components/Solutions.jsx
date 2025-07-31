import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  FaBullhorn,
  FaHashtag,
  FaLaptopCode,
  FaPenNib,
  FaSearch,
  FaGoogle,
  FaFacebook,
  FaShopify,
  FaMobileAlt,
  FaLink,
  FaPaintBrush,
  FaEnvelope,
} from "react-icons/fa";

const services = [
  {
    title: "Digital Marketing",
    price: "$750",
    shortDesc: "Promoting products online through websites, social media, SEO, and ads.",
    details: [
      "Promoting products online using websites, SEO, social media, ads",
      "Engaging customers via online channels, improving visibility and sales.",
      "Online strategies to drive traffic, conversions, and brand awareness.",
      "Utilizing search engines, social media, content for brand promotion.",
      "Online advertising, SEO, email, social media to drive conversions.",
    ],
    paymentTerm: "Payment term (One-Time Charge)",
    icon: <FaBullhorn className="text-blue-600 text-4xl mb-4" />,
  },
  {
    title: "Social Marketing",
    price: "$799",
    shortDesc: "Promoting products or causes on social media to engage audiences.",
    details: [
      "Promoting products, services, or ideas through social media platforms.",
      "Engaging audiences to create awareness, drive actions, or influence behavior.",
      "Using social media channels to communicate messages and build communities.",
      "Leveraging platforms like Facebook, Instagram, Twitter to drive engagement.",
      "Targeting specific demographics to increase brand visibility and loyalty.",
    ],
    paymentTerm: "Payment term (One-Time Charge)",
    icon: <FaHashtag className="text-blue-600 text-4xl mb-4" />,
  },
  {
    title: "UI/UX Designer",
    price: "$999",
    shortDesc: "Creating user-friendly interfaces and experiences for websites and applications.",
    details: [
      "Designing intuitive interfaces and experiences for websites and applications.",
      "Crafting seamless and efficient user journeys through thoughtful design.",
      "Enhancing user satisfaction through aesthetic, functional, and responsive designs.",
      "Designing wireframes, prototypes, and interfaces to optimize user engagement.",
      "Balancing aesthetics and functionality for intuitive, enjoyable digital experiences.",
    ],
    paymentTerm: "Payment term (One-Time Charge)",
    icon: <FaPaintBrush className="text-blue-600 text-4xl mb-4" />,
  },
  {
    title: "SEO Backlink",
    price: "$399",
    shortDesc: "Building quality links from external sites to boost search rankings.",
    details: [
      "Evaluate existing backlinks for quality and relevance.",
      "Acquire backlinks from authoritative and relevant websites.",
      "Submit your website to reputable online directories.",
      "Get listed on resource pages relevant to your industry.",
      "Dui vitae donec.",
    ],
    paymentTerm: "Payment term (One-Time Charge)",
    icon: <FaLink className="text-blue-600 text-4xl mb-4" />,
  },
  {
    title: "Website Design",
    price: "$349",
    shortDesc: "Creating visually appealing, functional, and user-friendly websites for businesses.",
    details: [
      "Clean and responsive design tailored to your brand.",
      "Up to 5 Pages: Home, About, Services, Contact, and one additional page.",
      "Custom Domain Integration: Connect your custom domain name.",
      "Deployment and testing to evaluate effectiveness and usability.",
    ],
    paymentTerm: "Payment term (One-Time Charge)",
    icon: <FaLaptopCode className="text-blue-600 text-4xl mb-4" />,
  },
  {
    title: "App Designing Services",
    price: "$500",
    shortDesc: "Designing intuitive, engaging, and user-friendly mobile applications for businesses.",
    details: [
      "Create user personas to guide design decisions and ensure alignment with target audiences.",
      "Develop wireframes.",
      "Organize and structure content to enhance navigation and user experience.",
      "Design interactive elements for smooth and responsive user interactions.",
      "Conduct tests to evaluate effectiveness and usability of design solutions.",
    ],
    paymentTerm: "Payment term (One-Time Charge)",
    icon: <FaMobileAlt className="text-blue-600 text-4xl mb-4" />,
  },
  {
    title: "GOOGLE ADS",
    price: "$100",
    shortDesc: "Google Ads is an online platform for creating targeted advertisements.",
    details: [
      "Search Ads",
      "Display Ads",
      "Video Ads",
      "Shopping Ads",
      "App Ads",
    ],
    paymentTerm: "Payment term (One-Time Charge)",
    icon: <FaGoogle className="text-blue-600 text-4xl mb-4" />,
  },
  {
    title: "FACEBOOK ADS",
    price: "$100",
    shortDesc: "Facebook Ads allows businesses to target audiences with customizable advertisements.",
    details: [
      "Image Ads",
      "Video Ads",
      "Carousel Ads",
      "Collection Ads",
      "Lead Ads",
    ],
    paymentTerm: "Payment term (One-Time Charge)",
    icon: <FaFacebook className="text-blue-600 text-4xl mb-4" />,
  },
  {
    title: "SHOPIFY STORE",
    price: "$199",
    shortDesc: "Shopify is an e-commerce platform to create and manage online stores.",
    details: [
      "Home Goods Store",
      "Beauty Store",
      "Fashion Store",
      "Tech Store",
      "Conduct tests of Design",
    ],
    paymentTerm: "Payment term (One-Time Charge)",
    icon: <FaShopify className="text-blue-600 text-4xl mb-4" />,
  },
];

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods, including credit/debit cards, bank transfers, and PayPal. If you have a specific payment preference, please reach out, and we’ll do our best to accommodate your needs.",
  },
  {
    question: "Is there a contract or commitment required?",
    answer:
      "We offer both contract and no-contract options, depending on the service package you choose. Our goal is to provide flexibility that aligns with your business needs. Reach out to us for more details on contract terms.",
  },
  {
    question: "Can I get a custom quote based on my unique business needs?",
    answer:
      "Absolutely! We understand that every business is different. If our standard pricing packages don’t fit your specific needs, we’ll be happy to provide a custom quote tailored to your objectives.",
  },
  {
    question: "How do you determine the pricing for your services?",
    answer:
      "Our pricing is based on the scope of the project, the competitiveness of your industry, and the specific services you require. We offer customizable packages to suit different budgets and goals, ensuring you get the most value from your investment.",
  },
  {
    question: "Can I change my plan or upgrade as my business grows?",
    answer:
      "Absolutely! We offer flexible plans, so you can adjust or upgrade your services as your business expands. Whether you need additional services or a higher level of engagement, we’ll work with you to scale your digital marketing efforts accordingly.",
  },
];

export default function Solutions() {
  const [openIndex, setOpenIndex] = React.useState(null);
   const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleCard = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  const toggleFaq = (idx) => {
    setFaqOpenIndex(faqOpenIndex === idx ? null : idx);
  };

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-tr from-blue-50 via-white to-blue-50">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-6">
          Our Services
        </h1>
        <p className="text-center text-blue-700 mb-14 max-w-3xl mx-auto text-lg">
          We pride ourselves on delivering compelling, digital marketing solutions. Our winning solutions and experiences help many of our clients interact and engage with their customers in the best possible way.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => toggleCard(idx)}
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mb-2 text-blue-800 hover:text-blue-900 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-2">{service.shortDesc}</p>
              <p className="font-bold text-blue-700 text-lg mb-2">{service.price}</p>

              {openIndex === idx && (
                <>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mb-4 italic">{service.paymentTerm}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/contact");
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
         {/* FAQ Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
            Have Any Questions? FAQ's
          </h2>
          <p className="text-center text-blue-700 mb-10 max-w-xl mx-auto text-lg">
            If you have any question contact with us we are here to help you
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-blue-200 rounded-xl p-5 cursor-pointer bg-white shadow hover:shadow-lg transition duration-300"
                onClick={() => toggleFaq(idx)}
              >
                <h3 className="text-xl font-semibold text-blue-800 flex justify-between items-center">
                  {faq.question}
                  <span className="text-2xl select-none">
                    {faqOpenIndex === idx ? "−" : "+"}
                  </span>
                </h3>
                {faqOpenIndex === idx && (
                  <p className="mt-3 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}


