//components/About.jsx

import React from "react";

function About()
{
    return (
        <section 
            id="about"
            style={{
                padding: '4rem 2rem',
                backgroundColor: '#0d1117',
                color: 'white',
                textAlign: 'center',
            }}
        >
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>About Me</h2>
            <p style={{maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8'}}>
                I’m Rushi, a frontend developer with a passion for building clean, responsive, and user-friendly websites. 
                I'm currently learning React and JavaScript, and I love turning ideas into interactive experiences. 
                With a background in IT and automation, I’m bringing creativity and logic together to craft meaningful digital solutions.
            </p>
        </section>
    );
}

export default About;