import "./App.css";

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Hero from "./components/sections/Hero/Hero";
import AIStats from "./components/sections/AIStats/AIStats";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Project";
import Experience from "./components/sections/Experiences/Experiences";
import Contact from "./components/sections/Contact/Contact";

function App() {
  return (
    <div className="app">
      {/* Background */}
      <div className="background">
        <div className="gradient gradient1"></div>
        <div className="gradient gradient2"></div>
        <div className="grid"></div>
      </div>

      {/* Components */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AIStats />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;