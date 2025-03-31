import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'BlogHub-Blog',
      description: 'A full-stack blog application that allows users to create, edit, and view blog posts with a dynamic UI',
      technologies: ['Node.js', 'Express.js', 'EJS', 'HTML', 'CSS'],
      github: 'https://github.com/rohit-kaushik0/BlogHub',
      live: 'https://www.linkedin.com/feed/update/urn:li:activity:7301961724830658560/',
      imageUrl: process.env.PUBLIC_URL + '/images/projects/bloghub_ss.png' // Updated image path
    },
    {
      title: 'GreenskyHub ',
      description: 'Created a modern website to promote the Green Revolution in Aviation',
      technologies: ['HTML', 'CSS', 'JS'],
      github: 'https://github.com/rohit-kaushik0/greenskyhub',
      live: 'https://rohit-kaushik0.github.io/greenskyhub/',
      imageUrl: process.env.PUBLIC_URL + '/images/projects/greensky_ss.png' // Updated image path
    },
    {
      title: 'Weather Forecasting App ',
      description: 'Built an app using Flutter and Dart to fetch real-time weather data, including temperature and wind speed.',
      technologies: ['OpenWeatherMap API', 'Flutter', 'Dart'],
      github: 'https://github.com/rohit-kaushik0/Weather_forcasting_App',
      live: 'https://www.linkedin.com/posts/rohit-hrk-517809231_flutter-weatherapp-mobiledevelopment-activity-7227913404030574592-BdIR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADn2b6MBXN9URN0FeUJ3ywMohBcDwJz1sdY',
      imageUrl: process.env.PUBLIC_URL + '/images/projects/wather_ss.png'
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map(tech => (
                    <motion.span 
                      key={tech} 
                      className="tech-tag"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
