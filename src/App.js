import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './componets/Client/Navbar';
import HomePage from './componets/Client/HomePage';
import ServicesPage from './componets/Client/ServicesPage';
import AboutPage from './componets/Client/AboutPage';
import ContactPage from './componets/Client/ContactPage';
import Footer from './componets/Client/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
