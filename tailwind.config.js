//tailwind.config.js

// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // adjust paths as needed
  theme: {
    extend: {
      colors: {
        background: '#121821',     // Darker, deep blue-gray background
        primaryText: '#cbd5e1',    // Soft light gray text
        accent: '#38b2ac',         // Calm teal for highlights/buttons
        highlight: '#7f9cf5',      // Soft blue for hover/focus states
        border: '#2d3748',         // Dark border color
        chatbotBg: '#1a202c',      // Darker background for chatbot
        chatbotBtn: '#319795',     // Teal-ish button color for chatbot
      },
    },
  },
  plugins: [],
};