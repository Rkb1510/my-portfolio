//components/Navbar.jsx

import React from "react";
import Scrollspy from "react-scrollspy";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Navbar()
{
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.logo}>Rushi's Portfolio</h1>
            <Scrollspy
                items={['home','about','projects','contact']}
                currentClassName="is-current "
                style={styles.navLinks}
                offset={-100}
            >
                <li><a href="#home" style={styles.link}><FaHome style={styles.icon} /> Home</a></li>
                <li><a href="#about" style={styles.link}><FaUser style={styles.icon} /> About</a></li>
                <li><a href="#projects" style={styles.link}><FaProjectDiagram style={styles.icon} /> Projects</a></li>
                <li><a href="#contact" style={styles.link}><FaEnvelope style={styles.icon} /> Contact</a></li>
            </Scrollspy>            
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

    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '1.5rem'
    },

    link: {
        color: 'white',
        textdecoration: 'none',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
    },

    icon: {
        marginRight: '8px',
        verticalAlign: 'middle',
    },
};

export default Navbar;