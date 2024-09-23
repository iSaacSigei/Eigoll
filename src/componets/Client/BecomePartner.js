import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BecomePartner.css'; // Ensure this CSS file is created and styled

const BecomePartner = () => {
  return (
    <div className="become-partner">
      {/* Header */}
      <h1 className="partner-header">Become a Partner</h1>

      {/* Paragraph */}
      <p className="partner-paragraph">
        At Eigoll Enterprises, we are committed to bridging the gap between contractors and suppliers. If you are a contractor looking to connect with reliable suppliers or a supplier interested in expanding your reach, we would love to hear from you. Please reach out to us through the email <a href="mailto:info@eigoll.co.ke">info@eigoll.co.ke</a> or fill out the contact form on our contact page. We will get back to you within two working days to explore potential partnership opportunities.
      </p>

      {/* Apply Link */}
      <div className="partner-apply">
        <Link to="/contact" className="apply-link">Apply to become a partner</Link>
      </div>
    </div>
  );
};

export default BecomePartner;
