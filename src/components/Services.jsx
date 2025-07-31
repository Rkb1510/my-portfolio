//components/Services.jsx

import { title } from "framer-motion/client";
import React from "react";
import { FaPaintBrush, FaCode, FaIdBadge, FaEnvelopeOpenText, FaLinkedin } from "react-icons/fa";

function Services() {
    const services =[
        {icon: <FaCode size={24} />, title: "Frontend Development"},
        {icon: <FaPaintBrush size={24} />, title: "Custom Drawings"},
        {icon: <FaIdBadge size={24} />, title: "Visiting Card Design"},
        {icon: <FaEnvelopeOpenText size={24} />, title: "Invitation Design"},
        {icon: <FaLinkedin size={24} />, title: "LinkedIn Banners"},
    ];

    return (
        <section
            id="services"
            className="pt-12 pb-20 px-6 flex flex-col items-center text-center
                    bg-gradient-to-b from-black via-gray-800 to-black text-gray-100"
        >
            <h1
                className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent
                        drop-shadow-[0_0_8px_rgba(56,178,172,.35)]"
            >
                Services I Offer
            </h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-black/70 border border-cyan-500/10 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-cyan-400">{service.icon}</span>
                            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        </div>                        
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;