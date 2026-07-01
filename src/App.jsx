import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

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

    </div>
  );
}

export default App;