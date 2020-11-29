import React from "react";
import Header from "../src/components/Header/Header";
import About from "../src/components/About/About";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  document.body.style.backgroundColor = "#222831";

  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={About} />
        <Route exact path="/React-Portfolio/" component={About} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/React-Portfolio/projects" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/React-Portfolio/contact" component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
