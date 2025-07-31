import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import ChatBot from './components/ChatBot.jsx';
import Service from './components/Services.jsx';
import Drawings from './components/Drawings.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Drawings />
      <Project />
      <Contact />
      <Footer />
      <ChatBot />
    </>
  );
}

export default App;