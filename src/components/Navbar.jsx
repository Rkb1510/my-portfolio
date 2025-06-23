//components/Navbar.jsx

import React from "react";

function Navbar()
{
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>Rushi's Portfolio</h1>
            <ul style={styles.navLinks}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'felx',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#0d1117',
        color: '#ffffff',
    },
    logo: {
        fontSize: '1.5rem',
    },
    logo: {
        fontSize: '1.5rem'
    },
    navLinks: {
        listStyle: 'none',
        display: 'felx',
        gap: '1.5rem'
    },
};

export default Navbar;