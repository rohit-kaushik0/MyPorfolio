import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Rohit Kaushik</div>
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <div className="nav-item" onClick={() => scrollToSection('home')}>Home</div>
        <div className="nav-item" onClick={() => scrollToSection('about')}>About</div>
        <div className="nav-item" onClick={() => scrollToSection('experience')}>Experience</div>
        <div className="nav-item" onClick={() => scrollToSection('skills')}>Skills</div>
        <div className="nav-item" onClick={() => scrollToSection('projects')}>Projects</div>
        <div className="nav-item" onClick={() => scrollToSection('contact')}>Contact</div>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
