import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Logo from '../images/logo-no-background.png'; // Adjust the path as needed
import '../styles/About.css'; // Ensure this CSS file is created and styled

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="about-page" ref={ref}>
      {/* Logo Section */}
      <div className="about-logo">
        <img src={Logo} alt="Eigoll Logo" />
      </div>

      {/* Header */}
      <motion.h1
        className="about-header"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
        transition={{ duration: 0.6 }}
      >
        About Eigoll Enterprises
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="about-paragraph"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
        transition={{ duration: 0.6 }}
      >
        Founded in 2018, Eigoll Enterprises is your trusted partner in prequalification and registration of companies. We offer efficient registration services to ensure your company is set up quickly and effectively. Our team is dedicated to providing reliable support to help your business grow and succeed. With a commitment to excellence and a focus on your needs, we strive to deliver exceptional service and innovative solutions.
      </motion.p>

      {/* Learn More Link */}
      <div className="about-learn-more">
        <Link to="/about">Learn more about Eigoll</Link>
      </div>
    </div>
  );
};

export default About;
