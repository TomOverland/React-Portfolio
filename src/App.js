import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/Header/Header";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Projects from "../src/components/Project/Project";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
