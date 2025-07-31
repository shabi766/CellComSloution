import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RefundPolicy = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Refund Policy</h1>

      <p className="mb-4">
        At CellCom Solution, we are committed to delivering high-quality digital services, including web development, SEO, digital marketing, and other online solutions. Our refund policy ensures transparency while maintaining fairness for both our clients and our business operations. By purchasing our services, you agree to the terms outlined in this refund policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. General Refund Policy</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Refund Eligibility:</strong> Refunds are only granted under specific conditions where we fail to deliver the agreed-upon service or if the service does not meet the stated scope and requirements.</li>
        <li><strong>Refund Request Period:</strong> Clients must submit refund requests within 30 days from the date of purchase. Any requests beyond this period will not be considered.</li>
        <li><strong>Processing Time:</strong> Approved refunds will be processed within 30 business days and will be credited back to the original payment method used for the purchase.</li>
        <li><strong>Company Discretion:</strong> We reserve the right to review, approve, or reject refund requests based on the specific circumstances.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Eligible Refund Cases</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Non-Delivery of Service:</strong> If we fail to deliver the purchased service within the agreed timeframe due to internal issues and lack of communication, you may request a full refund upon verification.</li>
        <li><strong>Service Not As Described:</strong> If the delivered service does not meet the agreed-upon scope or specifications, clients must provide clear evidence. We will either revise the service or issue a partial refund.</li>
        <li><strong>Technical Limitations Preventing Completion:</strong> If technical constraints prevent us from fulfilling the service, a partial or full refund may be issued.</li>
        <li><strong>Major Defects or Errors:</strong> In the case of unexpected technical errors, we will attempt to fix the issue within 72 hours. If unsuccessful, a refund or suitable replacement service may be offered.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Non-Refundable Cases</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Change of Mind:</strong> Refunds are not granted if a client cancels after work has started.</li>
        <li><strong>Completed Work:</strong> Once a service has been delivered and approved, refunds are not issued.</li>
        <li><strong>Client Non-Responsiveness:</strong> Failure to provide necessary information or feedback forfeits refund eligibility.</li>
        <li><strong>Dissatisfaction Without Valid Justification:</strong> Preferences outside of agreed scope are not grounds for a refund.</li>
        <li><strong>Third-Party Issues:</strong> We are not responsible for issues related to search engine algorithms, platform changes, or hosting/server problems.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Special Conditions</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Service Revisions:</strong> We encourage clients to request revisions before seeking refunds.</li>
        <li><strong>Subscription-Based Services:</strong> Cancel before the next billing cycle. No refunds for services already rendered.</li>
        <li><strong>Chargebacks & Disputes:</strong> Clients must contact us first before initiating any chargeback. We reserve the right to dispute unjustified chargebacks.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. How to Request a Refund</h2>
      <p className="mb-4">
        To request a refund, email our Billing Department at <a href="mailto:cellcomsolutions2016@gmail.com" className="text-blue-600 underline">cellcomsolutions2016@gmail.com</a> with the following:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Full Name & Contact Information</li>
        <li>Order/Invoice Number</li>
        <li>Reason for Refund Request (with supporting evidence, if applicable)</li>
      </ul>
      <p className="mt-2">We will respond within 5-7 business days after reviewing your request.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Children’s Policy</h2>
      <p className="mb-4">
        Our services are intended for individuals aged 18 and older. We do not knowingly collect personal information from children under 13. If discovered, we will delete the data and cancel any associated services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to This Refund Policy</h2>
      <p className="mb-4">
        We may update this refund policy at any time. Changes take effect immediately upon being posted. Continued use of our services signifies your acceptance of the updated policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p className="mb-2">📍 <strong>CellCom Solution</strong><br />4940 Estes Ave,
Skokie,Illinois.
60077.</p>
      <p className="mb-2">📞 <strong>Phone:</strong>1 (585) 4085017 </p>
      <p className="mb-6">✉️ <strong>Email:</strong> <a href="mailto:cellcomsolutions2016@gmail.com" className="text-blue-600 underline">cellcomsolutions2016@gmail.com</a></p>

      <p className="text-sm text-gray-500">© 2025 CellCom Solution. All Rights Reserved.</p>
    </div>
<Footer/>
    </>
  );
};

export default RefundPolicy;
