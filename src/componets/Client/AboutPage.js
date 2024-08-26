import React, { useEffect } from 'react';
import '../styles/AboutPage.css';
import Image1 from '../images/bid.jpg'; // Replace with actual image paths
import Image2 from '../images/constructions.avif';
import Image3 from '../images/supplies.webp';
import Image4 from '../images/road.jpeg';
import Image5 from '../images/office.jpg';
import Image6 from '../images/meeting.webp';

const content = [
  {
    image: Image1,
    description: 'Eigoll offers comprehensive tendering services to ensure competitive bidding for projects. Our platform simplifies the process and connects businesses with opportunities.',
  },
  {
    image: Image2,
    description: 'Our construction management services are designed to streamline your projects from start to finish. We provide expert oversight and support throughout the construction process.',
  },
  {
    image: Image3,
    description: 'At Eigoll, we manage the supply chain efficiently to guarantee timely delivery of goods and services. Our network ensures reliability and quality in all our transactions.',
  },
  {
    image: Image4,
    description: 'We provide strategic planning for road and infrastructure projects. Our expertise helps in developing and implementing sustainable solutions for infrastructure needs.',
  },
  {
    image: Image5,
    description: 'Our office solutions are designed to enhance productivity and create a conducive work environment. We offer customized office setups tailored to your business requirements.',
  },
  {
    image: Image6,
    description: 'Eigoll facilitates effective meetings and consultations. Our services include organizing and managing meetings to ensure successful outcomes and productive discussions.',
  },
];

const AboutPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const rows = document.querySelectorAll('.row');
      rows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          row.classList.add('in-view');
        } else {
          row.classList.remove('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      {content.map((item, index) => (
        <div className={`row ${index % 2 === 0 ? 'left-image' : 'right-image'}`} key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="column image-column">
                <img src={item.image} alt={`About ${index + 1}`} />
              </div>
              <div className="column description-column">
                <p>{item.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="column description-column">
                <p>{item.description}</p>
              </div>
              <div className="column image-column">
                <img src={item.image} alt={`About ${index + 1}`} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
