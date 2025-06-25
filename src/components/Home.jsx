//components/Home.jsx

import React from "react";
import './Home.css';

function Home() {
    return (
        <section id="home" className="home-section">
            <h1 className="home-title">Hi, I'm Rushi</h1>
            <p className="home-subtitle">
                A passionate frontend developer building beautiful and functional websites.
            </p>
            <a href="#projects" className="home-button">
                View Projects
            </a>
        </section>
    );
}

export default Home;