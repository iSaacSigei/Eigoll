import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ContactPage.css';
import Image1 from '../images/about1.jpg';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://mysite-jr5y.onrender.com/contact_messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success('Your message has been sent successfully!', {
        position: toast.POSITION.TOP_CENTER,
      });
      setFormData({
        name: '',
        number: '',
        email: '',
        message: '',
      });
    } else {
      toast.error('There was an error sending your message. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
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

      <div className="contact-wrapper">
        <ToastContainer />
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
              <p className="contact-paragraph">+254 20 8642000</p>
              <p className="contact-paragraph">+254 722 204 424</p>
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
              <p className="contact-paragraph">P.O BOX 10062-00400 Nairobi, Kenyai</p>
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
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
