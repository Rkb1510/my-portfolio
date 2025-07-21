//components/Project.jsx

import React from "react";
import { FaGithub } from "react-icons/fa";

function Project() {
  const projectList = [
    {
      title: "Banking Dashboard",
      description:
        "A secure full-stack banking app using .NET, React, and JWT authentication.",
      githubUrl: "https://github.com/Rkb1510/Banking-App",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal website built with React to showcase my projects and skills.",
      githubUrl: "https://github.com/Rkb1510/my-portfolio",
    },
    {
      title: "Quantum Risk Simulator",
      description:
        "A lightweight React-based simulator to visualize the cryptographic risks identity systems may face.",
      githubUrl: "https://github.com/Rkb1510/Quantam-Risk-Simulator",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-800 to-black text-gray-100 text-center scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/60 p-6 rounded-lg shadow-lg border border-cyan-500/20 
                       hover:shadow-cyan-500/40 hover:border-cyan-400/40 transition"
          >
            <h3 className="text-xl font-semibold text-cyan-300">
              {project.title}
            </h3>
            <p className="mt-3 text-gray-300">{project.description}</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 transition"
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