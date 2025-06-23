//components/Footer.jsx

import React from "react";

function Footer() {
    return (
        <footer
            style={{
                padding: '1.5rem 2rem',
                backgroundColor: '#161b22',
                color: 'white',
                textAlign: 'center',
            }}
        >
            <p>&copy; {new Date().getFullYear()} Rushi. All rights reserved.</p>
        </footer>
    );
}

export default Footer;