import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css'; // Ensure this CSS file is created and styled
import WhiteLogo from "../images/logo-no-background.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* First Column: Company Logo */}
        <div className="footer-column footer-logo">
          <Link to="/">
            <img src={WhiteLogo} alt="Eigoll Logo" />
          </Link>
        </div>

        {/* Second Column: About */}
        <div className="footer-column">
          <h3>About</h3>
          <p>
            Eigoll Enterprises connects contractors with suppliers, providing efficient procurement solutions and reliable support for your business needs.
          </p>
        </div>

        {/* Third Column: Social Links */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>

        {/* Fourth Column: Careers and Opportunities */}
        <div className="footer-column">
          <h3>Careers</h3>
          <p>
            Interested in joining our team? Explore exciting career opportunities with Eigoll Enterprises and be part of our growth.
          </p>
          <Link to="/careers">View Openings</Link>
        </div>

        {/* Fifth Column: Contact Us */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Eigoll Enterprises<br />
            View Park Towers, Utali Lane.<br />
            Room SN8<br />
            P.O BOX 10062-00400 Nairobi, Kenya<br />
            Email: <a href="mailto:info@eigoll.co.ke">info@eigoll.co.ke</a>
          </p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Eigoll. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
