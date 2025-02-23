import './App.css';
import experience1Image from './assets/mac_robomaster_logo.jpeg'; // Replace with the actual path to your image
import experience2Image from './assets/Sauka_logo.png'; // Replace with the actual path to your image
import project1Image from './assets/sustainabuy.jpeg'; // Replace with the actual path to your image
import project2Image from './assets/rapidfire.png'; // Replace with the actual path to your image
import project3Image from './assets/chooseflix.png'; // Replace with the actual path to your image
import resume from './assets/Akshaj_Shrotri_SWE_Resume.pdf'; // Replace with the actual path to your resume
import portrait from './assets/Akshaj-2.png'; // Import the portrait image
import linkedinLogo from './assets/linkedin-logo.png'; // Import the LinkedIn logo
import githubLogo from './assets/github-logo.png'; // Import the GitHub logo
import React, { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'a Creative Thinker.',
    'a Problem Solver.',
    'a Software Engineer.',
    'a Lifelong Learner.'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div>
      <div className="gradient"></div>
      <div id="root">
        <div className="navbar">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href={resume} download="Akshaj_Shrotri_Resume.pdf">Download Resume</a>
          <a href="https://www.linkedin.com/in/akshaj-shrotri-54907a202/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="navbar-logo" />
          </a>
          <a href="https://github.com/aksh-13" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="navbar-logo" />
          </a>
        </div>
        <div className="header">
          <div className="header-left">
            <div className="name">Akshaj Shrotri</div>
            <div className="typewriter">
              I am {text}
              <span className="blink-caret"></span>
            </div>
          </div>
          <div className="profile-photo">
            <img src={portrait} alt="Akshaj Shrotri" />
          </div>
        </div>
        <div className="divider"></div>
        <div id="experience" className="experience">
          <h2>Experience</h2>
          <div className="experience-cards">
            <div className="experience-card" onClick={() => alert('Experience 1 clicked')}>
              <img src={experience2Image} alt="Experience 1" />
              <div className="experience-card-content">
                <h3>Full Stack Developer Intern - Sauka Events</h3>
                <p className="dates">May 2024 - August 2024</p>
                <p>Developed a mobile-based website and a QR code drink ordering system using React.js, Node.js, MongoDB, and Python, improving order efficiency by 25% and enhancing customer satisfaction by 15%.</p>
                <p className="skills">Skills Acquired: React, Node.js, JavaScript, MongoDB</p>
              </div>
            </div>
            <div className="experience-card" onClick={() => alert('Experience 2 clicked')}>
              <img src={experience1Image} alt="Experience 2" />
              <div className="experience-card-content">
                <h3>Computer Vision Engineer - MAC Robomaster</h3>
                <p className="dates">October 2024 - Present</p>
                <p>At MAC Robomaster, I am currently optimizing computer vision for robotics, improving machine learning models, and integrating systems for seamless bot functionality.</p>
                <p className="skills">Skills Acquired: Python, OpenCV, MoonDream2, Machine Learning</p>
              </div>
            </div>
          </div>
          <p>
            I have worked on various projects involving web development, software engineering, and problem-solving. My experience includes working with technologies such as React, Node.js, and Python. I am passionate about learning new skills and continuously improving my craft.
          </p>
        </div>
        <div className="divider"></div>
        <div id="projects" className="projects">
          <h2>Projects</h2>
          <div className="projects-cards">
            <a href="https://github.com/aksh-13/SustainaBuy" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={project1Image} alt="Project 1" />
              <h3>Sustain-A-Buy</h3>
              <p>Developed a Chrome extension that analyzes the carbon footprint of Amazon products and recommends sustainable alternatives using AI, winning Best Sustainability Hack at a GDSC hackathon.</p>
            </a>
            <a href="https://github.com/arunt1130/delta-hacks-2025" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={project2Image} alt="Project 2" />
              <h3>RapidFire Alerts</h3>
              <p>Built a real-time wildfire alert system leveraging NASA FIRMS API, OpenStreetMaps, and AI-driven safety guidance, developed within 36 hours at DeltaHacks XI.</p>
            </a>
            <a href="https://github.com/aksh-13/ChooseFlix" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={project3Image} alt="Project 3" />
              <h3>ChooseFlix</h3>
              <p>Created a dynamic movie search engine integrating TMDB API with React.js, optimizing search functionality for real-time movie discovery and user engagement.</p>
            </a>
          </div>
          <p>
            Here are some of the projects I have worked on. These projects showcase my skills in web development, software engineering, and problem-solving. I am always looking for new challenges and opportunities to learn and grow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;