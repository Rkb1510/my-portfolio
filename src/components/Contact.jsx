//components/Contact.jsx

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert('Message sent (simulated)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{
                padding: '4rem 2rem',
                background: '#0d1117',
                color: 'white',
                textAlign: 'center',
            }}
        >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Me</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                I’d love to hear from you — whether it’s a project idea, a job opportunity, or just to connect!
            </p>

            <div style={styles.contactItem}>
                <FaPhone style={styles.icon} />
                <span>+1 (780) 952-9357</span>
            </div>
            <div style={styles.contactItem}>
                <FaEnvelope style={styles.icon} />
                <span>rbhuva1996@gmail.com</span>
            </div>
            <div style={styles.contactItem}>
                <FaMapMarkedAlt style={styles.icon} />
                <span>Alberta, Canada</span>
            </div>

            <a
                href="mailto:rbhuva1996@gmail.com"
                style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#238636',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: '600',
                    display: 'inline-block',
                    marginTop: '1.5rem',
                }}
            >
                <FaEnvelope style={{                    
                    marginRight: '0.5rem',                                        
                    }}/>
                    Send an Email
            </a>

            <form
                onSubmit={handleSubmit}
                style={{
                    marginTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    maxWidth: '500px',
                    marginInline: 'auto',
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{ ...inputStyle, resize: 'vertical' }}
                />

                <button
                    type="submit"
                    style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#238636',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: '600',
                        cursor: 'pointer',
                    }}
                >
                    Send Message
                </button>
            </form>
        </motion.section>
    );
}

const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
};

const styles = {
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#58a6ff',
    },
    icon: {
        fontSize: '1.2rem',
        color: '#58ff58',
    },
};

export default Contact;