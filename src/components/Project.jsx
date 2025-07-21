//components/Project.jsx

import React from 'react';
import './Project.css';
import { FaGithub } from 'react-icons/fa';

function Project() {
  const projectList = [
    {
      title: 'Banking Dashboard',
      description: 'A secure full-stack banking app using .NET, React, and JWT authentication.',
      githubUrl: 'https://github.com/Rkb1510/Banking-App',
    },

    {
      title: 'Portfolio Website',
      description: 'A personal website built with React to showcase my projects and skills.',
      githubUrl: 'https://github.com/Rkb1510/my-portfolio',
    },

    {
      title: 'Quantam Risk Simulator',
      description: 'A lightweight React-based simulator to visualize the cryptographic risks identity systems may face.',
      githubUrl: 'https://github.com/Rkb1510/Quantam-Risk-Simulator',
    },
    
  ];

  return (
    <section id="projects" className="project-section">
      <h2 className="project-title">My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <h3 className="project-card-title">{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub size={20} />
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;