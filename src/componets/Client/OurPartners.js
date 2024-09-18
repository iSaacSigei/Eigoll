import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/OurPartners.css';

// Import partner logos from /src/images folder
import Partner1 from '../images/Partner1.png';
import Partner2 from '../images/Partner2.gif';
import Partner3 from '../images/Partner3.png';
import Partner4 from '../images/Partner4.jpg';
import Partner5 from '../images/Partner5.jpg';
import Partner6 from '../images/Partner6.webp';
import Partner7 from '../images/Partner7.jpg';
import Partner8 from '../images/Partner8.jpg';

// Store the imported logos in an array
const partnerLogos = [
  { img: Partner1},
  { img: Partner2},
  { img: Partner3},
  { img: Partner4},
  { img: Partner5},
  { img: Partner6},
  { img: Partner7},
  { img: Partner8},
];

const OurPartners = () => {
  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: false });
  const { ref: partnersRef, inView: partnersInView } = useInView({ triggerOnce: false });

  return (
    <div className="our-partners-page">
      {/* Introduction Section */}
      <motion.section
        ref={introRef}
        className="introduction"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: introInView ? 1 : 0, scale: introInView ? 1 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Partners</h1>
        <p>
          At Eigoll, we are proud to work with a diverse range of partners who share our commitment to excellence. Our partners contribute to our mission by providing top-notch services and support.
        </p>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        ref={partnersRef}
        className="partners"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: partnersInView ? 1 : 0, scale: partnersInView ? 1 : 0.9 }}
        transition={{ duration: 0.6 }}
      >
        <div className="partners-list">
          {partnerLogos.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner.img} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default OurPartners;
