import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const blogPosts = [
  {
    id: 1,
    title: "How to Build Scalable Web Apps",
    description:
      "Learn best practices and tools to design and build scalable full-stack web applications in 2025.",
    content:
      "Building scalable web apps involves careful planning, choosing the right architecture, and using tools like microservices, containerization, and caching effectively. In this blog, we'll explore key strategies and examples.",
    author: "Jane Doe",
    date: "July 20, 2025",
    image: "/blog1.jpg", // use your image paths here
  },
  {
    id: 2,
    title: "Top 10 React Performance Tips",
    description:
      "Boost your React apps’ speed and efficiency with these battle-tested optimization techniques.",
    content:
      "React performance can be improved by techniques such as memoization, lazy loading, code splitting, and avoiding unnecessary renders. Learn practical tips to optimize your React apps.",
    author: "John Smith",
    date: "July 18, 2025",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    title: "How SEO boost your Website",
    description:
      "SEO, or Search Engine Optimization, boosts your website by improving its visibility and ranking in search engine  ",
    content:
      "Node.js 20 introduces exciting features including improved diagnostics, enhanced security, and new experimental APIs. This post details all you need to know to upgrade your projects.",
    author: "Alice Johnson",
    date: "July 15, 2025",
    image: "/blog3.jpg",
  },
  {
    id: 4,
    title: "Why UX Design Matters in Development",
    description:
      "Discover how thoughtful UX design can make or break your product, with real-world case studies.",
    content:
      "UX design shapes user experience and product success. We examine case studies where UX made a huge difference, and how to integrate UX early in your development cycle.",
    author: "Michael Lee",
    date: "July 12, 2025",
    image: "/blog4.jpg",
  },
  {
    id: 5,
    title: "A Beginner’s Guide to MongoDB Aggregations",
    description:
      "Understand the power of MongoDB aggregations to extract insights and power analytics.",
    content:
      "MongoDB aggregations allow complex data processing and analysis within the database. This guide covers the basics and how to use aggregation pipelines effectively.",
    author: "Sana Khan",
    date: "July 10, 2025",
    image: "/blog5.jpg",
  },
  {
    id: 6,
    title: "The Future of JAMstack in 2025",
    description:
      "Is JAMstack still relevant? We analyze the current trends, benefits, and challenges.",
    content:
      "JAMstack continues to evolve with new tools and best practices. We explore what’s new in 2025 and how JAMstack fits into modern web development.",
    author: "David Kim",
    date: "July 7, 2025",
    image: "/blog6.jpg",
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
    <Navbar/>
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Our Latest Blogs
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedBlog(post)}
              className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-2xl"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="text-sm text-gray-500">
                  <span>By {post.author}</span> · <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed blog */}
        {selectedBlog && (
          <div
            onClick={() => setSelectedBlog(null)}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl p-8 relative"
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
                loading="lazy"
              />
              <h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
              <p className="text-gray-600 mb-6">{selectedBlog.content}</p>
              <div className="text-sm text-gray-500 mb-4">
                <span>By {selectedBlog.author}</span> · <span>{selectedBlog.date}</span>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
    <Footer/>
    </>

  );
};

export default Blogs;
