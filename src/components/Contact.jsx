//components/Contact.jsx

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent (simulated)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white text-center max-w-3xl mx-auto scroll-mt-24"
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Contact Me
      </h2>
      <p className="mb-8 text-gray-300">
        I’d love to hear from you — whether it’s a project idea, a job
        opportunity, or just to connect!
      </p>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row sm:justify-center gap-6 mb-8 text-cyan-400 text-lg">
        <div className="flex items-center gap-2">
          <FaPhone className="text-white" />
          +1 (780) 952-9357
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-white" />
          rbhuva1996@gmail.com
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkedAlt className="text-white" />
          Alberta, Canada
        </div>
      </div>

      {/* Email Button */}
      <a
        href="mailto:rbhuva1996@gmail.com"
        className="inline-block mb-8 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-md font-semibold transition shadow-lg shadow-blue-500/30 text-white"
      >
        <FaEnvelope className="inline mr-2" />
        Send an Email
      </a>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-left"
        noValidate
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-md py-3 transition shadow-md shadow-cyan-500/30"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;