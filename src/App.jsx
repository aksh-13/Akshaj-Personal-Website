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
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="navbar-logo" />
          </a>
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
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
              <img src={experience1Image} alt="Experience 1" />
              <div className="experience-card-content">
                <h3>Experience 1</h3>
                <p className="dates">January 2020 - December 2020</p>
                <p>Brief description of experience 1.</p>
                <p className="skills">Skills Acquired: React, Node.js, JavaScript</p>
              </div>
            </div>
            <div className="experience-card" onClick={() => alert('Experience 2 clicked')}>
              <img src={experience2Image} alt="Experience 2" />
              <div className="experience-card-content">
                <h3>Experience 2</h3>
                <p className="dates">January 2021 - Present</p>
                <p>Brief description of experience 2.</p>
                <p className="skills">Skills Acquired: Python, Django, REST APIs</p>
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
            <a href="https://link-to-project1.com" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={project1Image} alt="Project 1" />
              <h3>Project 1</h3>
              <p>Brief description of project 1.</p>
            </a>
            <a href="https://link-to-project2.com" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={project2Image} alt="Project 2" />
              <h3>Project 2</h3>
              <p>Brief description of project 2.</p>
            </a>
            <a href="https://link-to-project3.com" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={project3Image} alt="Project 3" />
              <h3>Project 3</h3>
              <p>Brief description of project 3.</p>
            </a>
            <a href="https://link-to-project4.com" target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={project3Image} alt="Project 4" />
              <h3>Project 4</h3>
              <p>Brief description of project 4.</p>
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