import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
     title: "Full Stack Developer",
    company: "Zylentrix",
     period: "2025 - Present",
    description: [
      "Developing and maintaining the Zylentrix Job Support App, a client-facing mobile application for international job seekers",

      "Implementing responsive UI components using Flutter and Dart to ensure a seamless user experience",
      
      " Handling backend development using Firebase, including authentication, database management, and cloud functionss",
      
      "Troubleshooting issues, enhancing app stability, and improving code quality through efficient debugging and testing",
      
      "Staying updated with Flutter best practices and continuously refining features for scalability and user engagement",
      "Collaborating with cross-functional teams to gather requirements and deliver high-quality software solutions",
      ]
    },

    {
        title: "Application Developer",
        company: "Bharat Intern",
        period: "2024 - 2024",
        description: [
          "Developed user-friendly applications using Flutter framework. ",
          "Implemented responsive designs and modern UI components",
          "Enhanced app features based on user feedback for better engagement"
        ]
      },

      {
        title: "Website Design and Development (Intern)",
        company: "Internship Studio",
        period: "2024 - 2024",
        description: [
          "Designed and developed responsive websites leveraging HTML, CSS, and JavaScript",
          "Collaborated with clients to understand their requirements and deliver custom solutions",
          "Implemented responsive designs and modern UI components",
         
        ]
      },
    // Add more experiences here
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ x: 15 }}
            >
              <div className="timeline-content">
                <h3>
                  <FaBriefcase style={{ color: 'var(--secondary-color)' }} />
                  {exp.title}
                </h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <ul>
                  {exp.description.map((point, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
