import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FloatingContactButton from "./components/FloatingContactButton";
import ThemeToggle from "./components/ThemeToggle";
import ParticlesBackground from "./components/ParticlesBackground";

const App = () => {
  return (
    <Router>
      <div className="app">
        <ParticlesBackground />
        <Navbar />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FloatingContactButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
