//components/Navbar.jsx

import React, {useState} from "react";
import Scrollspy from "react-scrollspy";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>setMenuOpen(!menuOpen);

    return (
        <nav className="navbar">
            <h1 className="logo">Rushi's Portfolio</h1>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <Scrollspy
                items={["home", "about", "projects", "contact"]}
                currentClassName="is-current"
                className="nav-links"
                offset={-100}
            >
                <li><a href="#home" onClick={() => setMenuOpen(false)}><FaHome className="nav-icon" /> Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}><FaUser className="nav-icon" /> About</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}><FaProjectDiagram className="nav-icon" /> Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}><FaEnvelope className="nav-icon" /> Contact</a></li>        
            </Scrollspy>
            </div>

            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
}

export default Navbar;