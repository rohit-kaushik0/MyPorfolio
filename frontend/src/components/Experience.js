import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
     title: "Full Stack Developer",
    company: "Zylentrix",
     period: "2025 - Present",
    description: [
        "Developing and maintaining cross-platform mobile applications using Flutter and Dart.",
         "Implementing responsive UI components and ensuring seamless user experience.",
         "Collaborating with designers and backend developers to integrate APIs and optimize performance.",
         "Troubleshooting issues and improving app stability with efficient debugging and testing.",
         "Staying updated with Flutter best practices and contributing to code quality improvements."
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
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <ul>
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
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
