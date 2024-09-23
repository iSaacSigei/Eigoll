import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ContactPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from '../images/about1.jpg'; // Replace with your correct image path

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    fetch('https://mysite-jr5y.onrender.com/contact_messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contact_message: formData }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to send message');
        }
      })
      .then((data) => {
        if (data.message) {
          toast.success('Message sent successfully!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
          setFormData({
            name: '',
            number: '',
            email: '',
            message: ''
          });
        } else {
          toast.error('Failed to send message. Please try again.', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred. Please try again later.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      })
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Eigoll Enterprises</title>
        <meta name="description" content="Get in touch with Eigoll Enterprises through our contact form or by using our alternative contact details. We are here to assist you with any inquiries." />
        <meta property="og:title" content="Contact Us - Eigoll Enterprises LTD" />
        <meta property="og:description" content="Get in touch with Eigoll Enterprises through our contact form or by using our alternative contact details. We are here to assist you with any inquiries." />
        <meta property="og:image" content={Image1} /> {/* Replace with your image URL */}
        <meta property="og:url" content="https://eigoll.co.ke/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eigoll" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Eigoll Enterprises LTD" />
        <meta name="twitter:description" content="Get in touch with Eigoll Enterprises through our contact form or by using our alternative contact details. We are here to assist you with any inquiries." />
        <meta name="twitter:image" content="https://example.com/your-image.jpg" /> {/* Replace with your image URL */}
      </Helmet>

      <div className="contact-wrapper" data-aos="fade-up">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ marginTop: '130px' }}  // Add marginTop to ensure visibility
        />

        <h1 className="contact-title">Inquiries</h1>
        <p className="contact-description">
          If you still can't find what you're looking for, then you've come to the right place. Contact our team by filling out this simple form, or through our alternative contact details.
        </p>

        <div className="contact-body">
          {/* First Column - Our Contacts */}
          <div className="contact-details">
            <h2 className="contact-details-title">Our Contacts</h2>
            <div className="contact-section-wrapper">
              <h3 className="contact-heading">Call us</h3>
              <p className="contact-paragraph">+254 734 462 900</p>
            </div>
            <div className="contact-section-wrapper">
              <h3 className="contact-heading">Email us</h3>
              <p className="contact-paragraph">
                For inquiries email us via <a href="mailto:customercare@eigoll.co.ke">customercare@eigoll.co.ke</a>
              </p>
            </div>
            <div className="contact-section-wrapper">
              <h3 className="contact-heading">Find us here</h3>
              <p className="contact-paragraph">Eigoll Enterprises LTD</p>
              <p className="contact-paragraph">P.O BOX 10062-00400 Nairobi, Kenya</p>
            </div>
          </div>

          {/* Second Column - Contact Form */}
          <div className="contact-form-wrapper">
            <h2 className="form-header">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group-wrapper">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group-wrapper">
                <label htmlFor="number" className="form-label">Number *</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="form-input"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group-wrapper">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group-wrapper">
                <label htmlFor="message" className="form-label">Comment or Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
