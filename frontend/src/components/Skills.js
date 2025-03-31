import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaPython } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiPostgresql, SiFlutter, SiDart, SiCplusplus, SiFirebase } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'React', icon: <FaReact /> },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNode /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
    languages: [
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Dart', icon: <SiDart /> },
    ],
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skills-list">
                {items.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
