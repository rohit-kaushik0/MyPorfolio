import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p className="contact-description">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
            <div className="contact-methods">
              <motion.a 
                href="mailto:kaushikhr2@gmail.com" 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <div className="icon-circle">
                  <FaEnvelope />
                </div>
                <div className="contact-detail">
                  <h4>Email</h4>
                  <span>kaushikhr2@gmail.com</span>
                </div>
              </motion.a>

              <motion.a 
                href="tel:+918757052097" 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <div className="icon-circle">
                  <FaPhone />
                </div>
                <div className="contact-detail">
                  <h4>Phone</h4>
                  <span>+91 8757052097</span>
                </div>
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/rohit-hrk-517809231/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <div className="icon-circle">
                  <FaLinkedin />
                </div>
                <div className="contact-detail">
                  <h4>LinkedIn</h4>
                  <span>Connect with me</span>
                </div>
              </motion.a>

              <motion.div 
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <div className="icon-circle">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-detail">
                  <h4>Location</h4>
                  <span>Mohali, Punjab </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
