//components/ChatBox.jsx

import React, {useEffect, useState, useRef} from "react";
import "./ChatBot.css";

const botData = [
    {question: "Who are you?", answer:"I'm Rushi Bhuva, an IT Professional with 4+ years of experience in IT Operations, automation, and risk analysis."},
    {question: "What are your key skills?", answer: "C#, .NET Core, React, Python, ML, IAM, Automation, Postgres, Azure, and PowerShell scripting." },
    { question: "What’s your latest project?", answer: "I’m building a Post-Quantum Secure Identity Chatbot — blending GenAI, encryption, and trust frameworks." },
    { question: "Do you have experience in cybersecurity?", answer: "Yes! While not my title, I’ve worked in access governance, IAM (SailPoint, OUD), vulnerability monitoring, and data protection at TD Bank." },
    { question: "Where can I see your projects?", answer: "Check the Projects section above or visit my GitHub at https://github.com/Rkb1510." },
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const[messages, setMessages] = useState([]);
    const messageEndRef = useRef(null);
    const firstButtonRef = useRef(null);

    const handleUserInput = (question) => {
        const found = botData.find((q)=>q.question===question);
        const response = found ? found.answer:"Sorry, I don't have an answer for that.";
        setMessages((prev) => [
            ...prev,
            {sender:"user", text: question},
            {sender:"bot", text: response},
        ]);
    };

//AutoScroll
    useEffect(()=>{
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({behavior:"smooth"});
        }
    }, [messages]);

//Focus on First Question
    useEffect(()=>{
        if (isOpen && firstButtonRef.current) {
            firstButtonRef.current.focus();
        }
    }, [isOpen]);
    
    return (
        <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
            <button 
                className="chatbot-toggle" 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="chatbot-box"
                >
                Chat
            </button>

            {isOpen && (
                <div className="chatbot-box">
                    <div className="chatbot-header">Ask Rushi Bot</div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-questions">
                        {botData.map((q,idx) => (
                            <button key={idx} onClick={() => handleUserInput(q.question)}>
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