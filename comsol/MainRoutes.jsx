import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./src/Components/About";
import App from "./src/App";
import Services from "./src/Components/Services";
import Solutions from "./src/Components/Solutions";
import Contact from "./src/Components/Contact";
import Blogs from "./src/Components/Blogs";
import RefundPolicy from "@/Components/RefundPolicy";
import PrivacyPolicy from "@/Components/PrivacyPolicy";
import TermsConditions from "@/Components/TermsConditions";


function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/policies/refund" element={<RefundPolicy />} />
      <Route path="/policies/privacy" element={<PrivacyPolicy />} />
      <Route path="/policies/terms" element={<TermsConditions />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default MainRoutes;
