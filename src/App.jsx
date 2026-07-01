import "./App.css";

import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import Experience from "./components/Experiences/Experiences";
import AIStats from "./components/AIStats/AIStats";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">

      <Background />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <AIStats />

      <Contact />

    </div>
  );
}

export default App;