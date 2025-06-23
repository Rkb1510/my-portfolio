//components/Project.jsx

import React from 'react';

function Project() {
  const projectList = [
    {
      title: 'Banking Dashboard',
      description: 'A secure full-stack banking app using .NET, React, and JWT authentication.',
    },

    {
      title: 'Portfolio Website',
      description: 'A personal website built with React to showcase my projects and skills.',
    },
    
  ];

  return (
    <section
      id="projects"
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#161b22',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>My Projects</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#0d1117',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              textAlign: 'left',
            }}
          >
            <h3 style={{ color: '#58a6ff' }}>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
