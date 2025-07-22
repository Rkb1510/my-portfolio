//components/About.jsx

import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-0 px-6 bg-gradient-to-b from-black via-gray-800 to-black text-gray-100 text-center scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
        I’m <span className="text-cyan-400 font-semibold">Rushi</span>, 
        an IT professional and developer with over 4 years of experience in{" "}
        <span className="text-cyan-400 font-semibold">IT operations, risk analysis, and automation</span>. 
        I thrive on solving complex challenges and love diving deep into technologies like C#, .NET, React, Java, and frontend development, 
        while also exploring the fascinating realms of{" "}
        <span className="text-cyan-400 font-semibold">cybersecurity, AI, machine learning, and quantum computing</span>. 
        Known for quickly mastering new skills and driving innovation through automation,{" "}
        I’m a collaborative team player and an enthusiastic learner always eager to grow. 
      </p>
      <br></br>
      <br></br>
      <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-serif font-bold">Beyond technology,
          I enjoy playing badminton, reading by the beach, and pursuing adventure activities, which fuel my curiosity and passion for exploring both digital and natural worlds.
        </span>.
      </p>
    </section>
  );
}

export default About;