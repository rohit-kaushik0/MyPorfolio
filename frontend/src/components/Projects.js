import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'BlogHub-Blog',
      
      description: 'A full-stack blog application that allows users to create, edit, and view blog posts with a dynamic UI',
      technologies: ['Node.js', 'Express.js', 'EJS', 'HTML', 'CSS'],
      github: 'https://github.com/rohit-kaushik0/BlogHub',
      live: 'https://www.linkedin.com/feed/update/urn:li:activity:7301961724830658560/'
    },
    {
        title: 'GreenskyHub ',
        
        description: 'Created a modern website to promote the Green Revolution in Aviation',
        technologies: ['HTML', 'CSS', 'JS'],
        github: 'https://github.com/rohit-kaushik0/greenskyhub',
        live: 'https://rohit-kaushik0.github.io/greenskyhub/'
      },

      {
        title: 'Weather Forecasting App ',
        
        description: 'Built an app using Flutter and Dart to fetch real-time weather data, including temperature and wind speed.',
        technologies: ['OpenWeatherMap API', 'Flutter', 'Dart'],
        github: 'https://github.com/rohit-kaushik0/Weather_forcasting_App',
        live: 'https://www.linkedin.com/posts/rohit-hrk-517809231_flutter-weatherapp-mobiledevelopment-activity-7227913404030574592-BdIR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADn2b6MBXN9URN0FeUJ3ywMohBcDwJz1sdY'
      },

      
    // Add more projects here
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
