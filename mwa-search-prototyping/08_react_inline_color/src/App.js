import React, { Component } from "react";
import "./App.css";
import highlightPattern from './helpers/highlightPattern';


class App extends Component {
  render() {
    const str = "foo123bar";

    const strColor = highlightPattern(str, /\d+/g)

    return (
      <div> 
      {strColor}
      </div>
    );
  }
}

export default App;
