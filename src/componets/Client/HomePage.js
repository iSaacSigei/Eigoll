import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import BackgroundImage1 from '../images/constructions.avif';
import BackgroundImage2 from '../images/supplies.webp';
import BackgroundImage3 from '../images/roads.jpg';
import About from './About';
import OurPartners from './OurPartners';
import BecomePartner from './BecomePartner';

const messages = [
  {
    backgroundImage: BackgroundImage1,
    heading: 'Welcome to Eigoll',
    text: 'Your trusted partner in prequalification and registration of companies.',
  },
  {
    backgroundImage: BackgroundImage2,
    heading: 'Efficient Registration',
    text: 'We ensure your company is registered quickly and efficiently.',
  },
  {
    backgroundImage: BackgroundImage3,
    heading: 'Reliable Services',
    text: 'Dependable support for your company’s growth and success.',
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const showTextTimeout = setTimeout(() => {
      setShowText(true);
    }, 1500); // Time for the image to slide in before text appears

    const transitionTimeout = setTimeout(() => {
      setShowText(false); // Hide the text
      setTransitioning(true); // Start transition for the new image

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setTransitioning(false); // End transition state
      }, 1800); // Time for the image transition to complete
    }, 6000); // Time to display each image and text

    return () => {
      clearTimeout(showTextTimeout);
      clearTimeout(transitionTimeout);
    };
  }, [currentIndex]);

  const currentImage = messages[currentIndex]?.backgroundImage;

  return (
    <>
      <div className="home-page">
        {/* Current Background Image */}
        {currentImage && (
          <div
            className={`background-image ${transitioning ? 'slide-out' : 'slide-in'}`}
            style={{ backgroundImage: `url(${currentImage})` }}
          ></div>
        )}

        {/* Text Container */}
        <div className={`text-container ${showText ? 'fade-in' : 'fade-out'}`}>
          <h1>{messages[currentIndex]?.heading}</h1>
          <p>{messages[currentIndex]?.text}</p>
        </div>

        {/* Additional Text Container for Small Screens */}
        <div className="small-screen-text">
          <p>
            Interested suppliers are invited to apply for prequalification, indicating the category of the goods,
            works, and services they wish to supply/provide.
          </p>
        </div>
      </div>
      <About />
      <OurPartners />
      <BecomePartner />
    </>
  );
};

export default HomePage;
