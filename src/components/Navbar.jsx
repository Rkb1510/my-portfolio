//components/Navbar.jsx

import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-cyan-400 tracking-wider">
          Rushi's Portfolio
        </h1>

        {/* Desktop Links */}
        <Scrollspy
          items={["home", "about", "projects", "contact"]}
          currentClassName="text-cyan-400 border-b-2 border-cyan-400"
          offset={-100}
          className={`hidden md:flex gap-8 text-gray-300 font-medium`}
        >
          <li>
            <a href="#home" className="hover:text-cyan-400 transition flex items-center gap-2">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition flex items-center gap-2">
              <FaUser /> About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition flex items-center gap-2">
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition flex items-center gap-2">
              <FaEnvelope /> Contact
            </a>
          </li>
        </Scrollspy>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-4 flex flex-col gap-4 text-gray-300">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 flex items-center gap-2">
            <FaHome /> Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 flex items-center gap-2">
            <FaUser /> About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 flex items-center gap-2">
            <FaProjectDiagram /> Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 flex items-center gap-2">
            <FaEnvelope /> Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;