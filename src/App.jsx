import './App.css';
import experience1Image from './assets/logo_FINAL.jpg'; // Replace with the actual path to your image
import experience2Image from './assets/Sauka_logo.png'; // Replace with the actual path to your image
import project1Image from './assets/Sauka_logo.png'; // Replace with the actual path to your image
import project2Image from './assets/Sauka_logo.png'; // Replace with the actual path to your image
import resume from './assets/Akshaj_Shrotri_SWE_Resume.pdf'; // Replace with the actual path to your resume

function App() {
  return (
    <div id="root">
      <div className="navbar">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href={resume} download="Akshaj_Shrotri_Resume.pdf">Download Resume</a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="profile-photo">
        {/* Replace with your photo */}
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
            <img src={experience1Image} alt="Experience 1" />
            <h3>Experience 1</h3>
            <p>Brief description of experience 1.</p>
          </div>
          <div className="experience-card" onClick={() => alert('Experience 2 clicked')}>
            <img src={experience2Image} alt="Experience 2" />
            <h3>Experience 2</h3>
            <p>Brief description of experience 2.</p>
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