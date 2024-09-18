import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/HomePage.css';
import BackgroundImage1 from '../images/constructions.avif';
import BackgroundImage2 from '../images/supplies.webp';
import BackgroundImage3 from '../images/roads.jpg';
import About from './About';
import OurPartners from './OurPartners';
import BecomePartner from './BecomePartner';
import OurServices from './OurServices';

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
  return (
    <>
      <div className="home-page">
        {/* Carousel for Background Images */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          interval={6000}
          transitionTime={1000}
          emulateTouch
          stopOnHover
        >
          {messages.map((message, index) => (
            <div key={index} className="carousel-slide">
              <div
                className="carousel-background"
                style={{ backgroundImage: `url(${message.backgroundImage})` }}
              >
                <div className="text-container">
                  <h1>{message.heading}</h1>
                  <p>{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <About />
      <OurServices/>
      <OurPartners />
      <BecomePartner />
    </>
  );
};

export default HomePage;
