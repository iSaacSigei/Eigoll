import React from 'react';
import '../styles/OurServices.css';
import { FaFileSignature, FaCheckCircle, FaClipboardList, FaSearchDollar } from 'react-icons/fa';

const services = [
  {
    icon: <FaFileSignature />,
    title: 'Company Prequalification',
    description: 'We assist businesses in navigating the prequalification process, ensuring that your company meets all the necessary criteria for eligibility in specific sectors or markets.'
  },
  {
    icon: <FaCheckCircle />,
    title: 'Registration and Compliance',
    description: 'Our team ensures that your company is properly registered with the relevant authorities, and that it adheres to all regulatory and compliance standards for smooth operations.'
  },
  {
    icon: <FaClipboardList />,
    title: 'Document Verification',
    description: 'We handle the verification of all required documents, ensuring that your submission is complete, accurate, and up to the standards set by industry and government regulations.'
  },
  {
    icon: <FaSearchDollar />,
    title: 'Market Access Support',
    description: 'Gain access to new markets with our support. We connect you with potential clients and suppliers, helping you expand your business footprint in different industries and regions.'
  }
];

const OurServices = () => {
  return (
    <div className="services-page">
      <h1 className="services-header">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
