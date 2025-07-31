import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./src/Components/About";
import App from "./src/App";
import Services from "./src/Components/Services";
import Solutions from "./src/Components/Solutions";
import Contact from "./src/Components/Contact";
import Blogs from "./src/Components/Blogs";


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
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default MainRoutes;
