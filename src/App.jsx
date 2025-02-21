import './App.css';
import experience1Image from './assets/mac_robomaster_logo.jpeg'; // Replace with the actual path to your image
import experience2Image from './assets/Sauka_logo.png'; // Replace with the actual path to your image
import project1Image from './assets/Sauka_logo.png'; // Replace with the actual path to your image
import project2Image from './assets/Sauka_logo.png'; // Replace with the actual path to your image
import resume from './assets/Akshaj_Shrotri_SWE_Resume.pdf'; // Replace with the actual path to your resume
import portrait from './assets/Akshaj-2.png'; // Import the portrait image
import linkedinLogo from './assets/linkedin-logo.png'; // Import the LinkedIn logo
import githubLogo from './assets/github-logo.png'; // Import the GitHub logo

function App() {
  return (
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
      <div className="profile-photo">
        <img src={portrait} alt="Akshaj Shrotri" />
      </div>
      <div className="name">Akshaj Shrotri</div>
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">I am</p>
          <ul className="content__container__list">
            <li className="content__container__list__item">a Creative Thinker.</li>
            <li className="content__container__list__item">a Problem Solver.</li>
            <li className="content__container__list__item">a Software Engineer.</li>
            <li className="content__container__list__item">a Lifelong Learner.</li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-cards">
          <div className="experience-card" onClick={() => alert('Experience 1 clicked')}>
            <img src={experience2Image} alt="Experience 1" />
            <div className="experience-card-content">
              <h3>Full Stack Developer Intern</h3>
              <p className="dates">May 2024 - August 2024</p>
              <p>Developed a mobile-based website and a QR code drink ordering system using React.js, Node.js, MongoDB, and Python, improving order efficiency by 25% and enhancing customer satisfaction by 15%.</p>
              <p className="skills">Skills Acquired: React, Node.js, JavaScript, MongoDB</p>
            </div>
          </div>
          <div className="experience-card" onClick={() => alert('Experience 2 clicked')}>
            <img src={experience1Image} alt="Experience 2" />
            <div className="experience-card-content">
              <h3>Computer Vision Engineer</h3>
              <p className="dates">October 2024 - Present</p>
              <p>Designed and implemented real-time object detection and tracking using Python, optimizing bot accuracy and efficiency while integrating computer vision with hardware and software for seamless functionality.</p>
              <p className="skills">Skills Acquired: Python, OpenCV, MoonDream2, Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-cards">
          <div className="project-card" onClick={() => alert('Project 1 clicked')}>
            <img src={project1Image} alt="Project 1" />
            <h3>Project 1</h3>
            <p>Brief description of project 1.</p>
          </div>
          <div className="project-card" onClick={() => alert('Project 2 clicked')}>
            <img src={project2Image} alt="Project 2" />
            <h3>Project 2</h3>
            <p>Brief description of project 2.</p>
          </div>
        </div>
        <p>
          Here are some of the projects I have worked on. These projects showcase my skills in web development, software engineering, and problem-solving. I am always looking for new challenges and opportunities to learn and grow.
        </p>
      </div>
    </div>
  );
}

export default App;