import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>Hi, I'm a final-year Computer Science student passionate about building innovative tech solutions. With expertise in competitive programming (C++ & Python), full-stack development (React, Node.js, Express, SQL), and AI-driven applications, I thrive on solving complex problems and creating impactful digital experiences..</p>
            <p>Currently, I work as a Flutter Developer at Zylentrix, where I develop and maintain cross-platform mobile applications. My work involves building responsive UI components, integrating APIs, optimizing performance, and ensuring a smooth user experience.</p>
            <p>My projects range from web and mobile app development (Flutter), machine learning (CNNs, image classification), and backend systems, including a blog application and an AI-powered job search agent.</p>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="/images/profile.jpg" 
              alt="Rohit Kaushik - Full Stack Developer" 
              width="300"
              height="300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
