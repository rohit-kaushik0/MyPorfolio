import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Building responsive and interactive web applications using modern frameworks and technologies."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications using Flutter and native technologies."
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description: "Developing robust server-side applications and RESTful APIs."
    }
  ];

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
        <div className="about-container">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="about-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p>Hi, I'm a final-year Computer Science student passionate about building innovative tech solutions. With expertise in competitive programming (C++ & Python), full-stack development (React, Node.js, Express, SQL), and AI-driven applications, I thrive on solving complex problems and creating impactful digital experiences.</p>
              <p>Currently, I work as a Flutter Developer at Zylentrix, where I develop and maintain cross-platform mobile applications. My work involves building responsive UI components, integrating APIs, optimizing performance, and ensuring a smooth user experience.</p>
              <p>My projects range from web and mobile app development (Flutter), machine learning (CNNs, image classification), and backend systems, including a blog application and an AI-powered job search agent.</p>
            </motion.div>
          </motion.div>
          <motion.div className="skills-highlight">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
