import React from 'react';
import '../styles/AboutPage.css';
import Image1 from '../images/about1.jpg';
import Image2 from '../images/about2.webp';
import Image3 from '../images/about3.jpeg';
import Image4 from '../images/about4.jpg';
import AboutSection from './AboutSection';

const aboutSections = [
  {
    image: Image1,
    title: 'Who We Are',
    description:
      'At Eigoll, we specialize in providing companies with the tools and guidance they need to excel in prequalification and registration processes. Our goal is to make sure businesses meet the necessary standards to operate effectively in their industries.',
  },
  {
    image: Image2,
    title: 'Our Vision',
    description:
      'We envision a world where businesses have seamless access to the markets and industries they wish to operate in. Our vision is to transform the way businesses approach compliance and prequalification, making it simpler and more effective.',
  },
  {
    image: Image3,
    title: 'Our Mission',
    description:
      'Our mission is to streamline prequalification and registration processes, helping businesses overcome obstacles related to documentation and compliance. We aim to provide efficient, reliable, and high-quality services to our clients.',
  },
  {
    image: Image4,
    title: 'Why Choose Us',
    description:
      'Choosing Eigoll means choosing a partner committed to your success. With our deep knowledge of industry regulations and a focus on excellence, we ensure that your business is fully equipped to meet the requirements for market entry.',
  },
];

const AboutPage = () => {
  return (
    <>
    <div className="about-page">

      <h1 className="about-page__header">About Us</h1>
      <div className="about-page__sections">
        {aboutSections.map((section, index) => (
          <AboutSection
            key={index}
            image={section.image}
            title={section.title}
            description={section.description}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default AboutPage;
