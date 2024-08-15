import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import data from "./Data/data.json";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Portfolio from "./Components/Portfolio";
import Recommend from "./Components/Recommend";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Hero />
      </header>
      <body>
        <About />
        <Resume />
        <Portfolio />
        <Recommend />
        <Contact />
      </body>
      <footer>
        <p>Some footer details.</p>
      </footer>
    </div>
  );
}

export default App;
