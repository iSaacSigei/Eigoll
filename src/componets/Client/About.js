import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo-no-background.png'; // Adjust the path as needed
import '../styles/MissionPage.css'; // Ensure this CSS file is created and styled

const MissionPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`mission-page ${isVisible ? 'in-view' : ''}`}
      ref={sectionRef}
    >
      {/* Logo Section */}
      <div className="mission-logo">
        <img src={Logo} alt="Eigoll Logo" />
      </div>

      {/* Header */}
      <h1 className="mission-header">About Eigoll Enterprises</h1>

      {/* Paragraph */}
      <p className="mission-paragraph">
        Founded in 2018, Eigoll Enterprises is your trusted partner in prequalification and registration of companies. We offer efficient registration services to ensure your company is set up quickly and effectively. Our team is dedicated to providing reliable support to help your business grow and succeed. With a commitment to excellence and a focus on your needs, we strive to deliver exceptional service and innovative solutions.
      </p>

      {/* Learn More Link */}
      <div className="mission-learn-more">
        <Link to="/about">Learn more about Eigoll</Link>
      </div>
    </div>
  );
};

export default MissionPage;
