    import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Need help or have questions? Reach out and our team will get back to you promptly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-600">+1 585 4085017</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600">info@orbitoinc.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Head Office</h3>
            <p className="text-gray-600">
              4940 Estes Ave <br />
              Skoke, Illinois <br />
              60077
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-6 shadow-xl rounded-2xl">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
