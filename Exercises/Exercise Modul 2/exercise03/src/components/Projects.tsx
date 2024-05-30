import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project">
          <h2>Front-End Web Development</h2>
          <p>Using the HTML, CSS, Javascript, and others to create eye-catching websites.</p>
        </div>
        <div className="project">
          <h2>Back-End Web Development</h2>
          <p>Using programs such as MySQL to manage datas better.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
