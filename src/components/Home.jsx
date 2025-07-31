//components/Home.jsx

import React from "react";

function Home() {
  return (
    <section
      id="home"
      /* scroll-mt helps anchors land below fixed navbar */
      className="pt-24 pb-12 px-6 flex flex-col items-center text-center
                 bg-gradient-to-b from-black via-gray-800 to-black text-gray-100"
    >
      <h1
        className="text-4xl font-extrabold mb-5 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent
                   drop-shadow-[0_0_8px_rgba(56,178,172,.35)]"
      >
        Hi, I'm Rushi
      </h1>

      <p className="mt-4 max-w-xl text-lg md:text-xl leading-relaxed text-gray-300">
        Building secure, intelligent, and future‑ready experiences in{" "}
        <span className="text-cyan-400 font-semibold">AI</span>,{" "}
        <span className="text-cyan-400 font-semibold">Cybersecurity</span>, and{" "}
        <span className="text-cyan-400 font-semibold">Quantum Computing</span>.
      </p>

      <p className="mt-4 max-w-xl text-lg md:text-xl leading-relaxed text-gray-300">
        In addition, also do some{" "}
        <span className="text-cyan-400 font-semibold">creative art</span> and{" "}
        <span className="text-cyan-400 font-semibold">designing</span>.
      </p>

      <a
        href="/Rushi Bhuva.pdf"
        download
        className="mt-8 inline-block px-6 py-3 rounded-lg font-semibold
                   bg-gradient-to-r from-cyan-500 to-blue-600
                   hover:from-cyan-400 hover:to-blue-500
                   transition shadow-lg shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Home;