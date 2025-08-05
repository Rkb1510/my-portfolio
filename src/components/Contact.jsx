//components/Contact.jsx

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="pt-12 pb-20 px-6 flex flex-col items-center text-center
                 bg-gradient-to-b from-black via-gray-800 to-black text-gray-100"
    >
      <div className="max-w-5xl px-6 bg-gradient-to-b from-black via-gray-800 to-black">
        <h1 className="text-4xl font-extrabold mb-10 pb-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent
                   drop-shadow-[0_0_8px_rgba(56,178,172,.35)]">
          Contact Me
        </h1>

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
            <a
              href="linkedin.com/in/rushibhuva"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-blue-300 transition"
            >
              <FaLinkedin className="text-white" />
              LinkedIn
            </a>
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
      </div>     
    </motion.section>
  );
}

export default Contact;