import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MainTemplate from "./components/MainTemplate";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/main">
            <MainTemplate />
          </Route>
          <Route path="/canvas">
            <Canvas />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
