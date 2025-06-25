//components/Contact.jsx

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
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
      className="contact-section"
    >
      <h2>Contact Me</h2>
      <p>I’d love to hear from you — whether it’s a project idea, a job opportunity, or just to connect!</p>

      <div className="contact-item"><FaPhone className="icon" /> +1 (780) 952-9357</div>
      <div className="contact-item"><FaEnvelope className="icon" /> rbhuva1996@gmail.com</div>
      <div className="contact-item"><FaMapMarkedAlt className="icon" /> Alberta, Canada</div>

      <a href="mailto:rbhuva1996@gmail.com" className="email-link">
        <FaEnvelope style={{ marginRight: '0.5rem' }} />
        Send an Email
      </a>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="contact-input contact-textarea"
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </motion.section>
  );
}

export default Contact;