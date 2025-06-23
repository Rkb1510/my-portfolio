//components/Hero.jsx

import React from "react";

function Hero() {
    return (
        <section
            id="home"

            style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                backgroundColor: '#161b22',
                color: 'white',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1rem',
            }}
        >
            <h1 style={{fontSize: '3rem', margin: 0}}>Hi, I'm Rushi</h1>
            <p style={{fontSize: '1.5rem', margin: 0}}>
                A passionate frontend developer building beautiful and functional websites.
            </p>
            <a
                href="#projects"
                style={{
                    marginTop: '2rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#238636',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: '600',
                    width: 'max-content',
                    alignSelf: 'center',
                }}
            >
                View Projects
            </a>
        </section>
    );
}

export default Hero;