import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = ({ image, title, description, isEven }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={`about-section ${isEven ? 'about-section--left' : 'about-section--right'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-section__image">
        <img src={image} alt={title} />
      </div>
      <div className="about-section__description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default AboutSection;
