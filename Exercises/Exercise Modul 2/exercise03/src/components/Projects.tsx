import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project">
          <h2>Project 1</h2>
          <p>Project description here.</p>
        </div>
        <div className="project">
          <h2>Project 2</h2>
          <p>Project description here.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
