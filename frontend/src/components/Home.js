import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaDownload } from 'react-icons/fa';
import '../styles/Home.css';

//reusable animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Home = () => {
  const handleResumeClick = () => {
    const resumePath = process.env.PUBLIC_URL + '/resume/resume.pdf';
    window.open(resumePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="section home">
      <div className="container">
        <div className="home-content">
          <motion.div className="home-text">
            <motion.div className="text-content">
              <motion.span
                className="greeting"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hello, It's Me
              </motion.span>
              <motion.h1 
                className="name"
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Rohit Kaushik
              </motion.h1>
              <motion.div
                className="typing-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.h2 className="role">
                  I'm a <span className="highlight">Full Stack Developer</span>
                </motion.h2>
              </motion.div>
              <motion.p
                className="description"
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                I specialize in building exceptional digital experiences and creating innovative solutions through modern web development.
              </motion.p>
              <motion.div 
                className="social-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a 
                  href="https://github.com/rohit-kaushik0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rohit-hrk-517809231/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://www.instagram.com/_rohit_hrk?igsh=dzdpcHU3NDMzOTZm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram />
                </a>

                <a 
                  href="https://x.com/_rohit_hrk" // Replace with your Twitter handle
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter />
                </a>
              </motion.div>
              <motion.div 
                className="cta-container"
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={{ delay: 0.8 }}
              >
                <motion.button 
                  className="download-cv"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResumeClick}
                >
                  <FaDownload /> Download CV
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="home-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="image-wrapper">
              <div className="image-frame">
                <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="Profile" />
                <div className="frame-border"></div>
                <div className="glow-effect"></div>
              </div>
              <div className="floating-shapes">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
                <div className="shape shape4"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
