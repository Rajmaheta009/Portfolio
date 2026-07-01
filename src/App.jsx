import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AIStats from "./components/AIStats/AIStats";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import Experience from "./components/Experiences/Experiences";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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