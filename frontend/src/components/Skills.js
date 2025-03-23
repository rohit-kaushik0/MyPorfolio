import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    frontend: ['HTML5', 'CSS3', 'Flutter', 'React', ],
    backend: ['Node.js', 'Express', 'EJS' ,'PostgreSQL', 'RESTful APIs'],
    languages: ['C++','Python', 'JavaScript', 'Dart' ,'SQL'],
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <ul>
                {items.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
