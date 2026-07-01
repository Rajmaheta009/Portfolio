import "./App.css";

import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="app">

      <Background />

      <Navbar />

      <Hero />

      <About />

      <Skills />
      
    </div>
  );
}

export default App;