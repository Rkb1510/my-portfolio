//components/About.jsx

import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 text-center bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
        I’m <span className="text-cyan-400 font-semibold">Rushi</span>, a frontend developer
        with a passion for building clean, responsive, and user-friendly websites.
        I’m currently learning <span className="text-blue-400">React</span> and{" "}
        <span className="text-blue-400">JavaScript</span>, and I love turning ideas
        into interactive experiences.
        <br className="hidden md:block" />
        With a background in IT and automation, I blend{" "}
        <span className="text-cyan-300 font-medium">creativity</span> and{" "}
        <span className="text-blue-300 font-medium">logic</span> to craft
        meaningful digital solutions.
      </p>
    </section>
  );
}

export default About;