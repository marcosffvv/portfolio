import React from 'react';
import NavBar from "./components/Navbar/NavBar.jsx";
import Home from "./pages/HomePape/Home";
import About from "./pages/AboutPage/About";
import Projects from "./pages/ProyectsPage/Projects";
import Experience from "./pages/ExperiencePage/Experience";
import Contact from "./pages/ContactPage/Contact";
import SocMediaLinks from './components/Socials/Socials';

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <SocMediaLinks />
    </>
  )
}

export default App