import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-methods">
          <a href="mailto:kaushikhr2@gmail.com" className="contact-item">
            <FaEnvelope />
            <span>kaushikhr2@gmail.com</span>
          </a>
          <a href="tel:+91XXXXXXXXXX" className="contact-item">
            <FaPhone />
            <span>+91 8757052097</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/rohit-hrk-517809231/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
