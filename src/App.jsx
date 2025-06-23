import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <section id="home" style={{ padding: '2rem' }}>
        {/*<h2>Welcome to my professional website</h2>
        <p>This is the homepage section.</p>*/}
      </section>
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
