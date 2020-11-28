import React from "react";
import Header from "../src/components/Header/Header";
import Portfolio from "../src/components/Portfolio/Portfolio";
import Project from "../src/components/Project/Project";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Portfolio />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
