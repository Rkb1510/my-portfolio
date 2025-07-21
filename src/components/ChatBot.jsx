//components/ChatBox.jsx

import React, { useEffect, useState, useRef } from "react";

const botData = [
  { question: "Who are you?", answer: "I'm Rushi Bhuva, an IT Professional with 4+ years of experience in IT Operations, automation, and risk analysis." },
  { question: "What are your key skills?", answer: "C#, .NET Core, React, Python, ML, IAM, Automation, Postgres, Azure, and PowerShell scripting." },
  { question: "What’s your latest project?", answer: "I’m building a Post-Quantum Secure Identity Chatbot — blending GenAI, encryption, and trust frameworks." },
  { question: "Do you have experience in cybersecurity?", answer: "Yes! While not my title, I’ve worked in access governance, IAM (SailPoint, OUD), vulnerability monitoring, and data protection at TD Bank." },
  { question: "Where can I see your projects?", answer: "Check the Projects section above or visit my GitHub at https://github.com/Rkb1510." },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);

  const handleUserInput = (question) => {
    const found = botData.find((q) => q.question === question);
    const response = found ? found.answer : "Sorry, I don't have an answer for that.";
    setMessages((prev) => [...prev, { sender: "user", text: question }, { sender: "bot", text: response }]);
  };

  // Auto-scroll
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle Button */}
      <button
        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:from-cyan-400 hover:to-blue-500 transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="chatbot-box"
      >
        {isOpen ? "Close" : "Chat"}
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 bg-gray-900 rounded-xl shadow-lg mt-2 overflow-hidden flex flex-col border border-gray-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-3 font-semibold text-center">
            Ask Rushi Bot
          </div>

          {/* Messages */}
          <div className="max-h-64 overflow-y-auto p-3 scroll-smooth flex flex-col gap-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`px-3 py-2 rounded-lg w-fit text-sm ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white self-end ml-auto"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="flex flex-wrap gap-2 p-3 border-t border-gray-700">
            {botData.map((q, idx) => (
              <button
                key={idx}
                className="flex-1 text-sm bg-gray-800 text-gray-200 rounded-md py-2 hover:bg-gray-700 transition"
                onClick={() => handleUserInput(q.question)}
              >
                {q.question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;