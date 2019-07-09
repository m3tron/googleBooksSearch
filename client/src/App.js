import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <header>
          <Nav />
        </header>
      </div>
    );
  }
}

export default App;
