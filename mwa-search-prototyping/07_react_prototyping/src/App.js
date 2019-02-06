import React, { Component } from "react";
import "./App.css";
import data from "./data/datafile";
import grepObject from "./js/grepObject";
import highlightPattern from './helpers/highlightPattern';

class App extends Component {
  render() {
    const reg = /mxammen/g;

    const results = grepObject(data, reg);

    const textusResult = [];

    for (const result of results) {
      const { textus, versio } = result;
      textusResult.push(highlightPattern(textus, reg));
      textusResult.push(versio);
    }

    return (
      <div className="App">
        {textusResult.map((line, i) =>  {
          return (
            <div className='textus-line' key={i}>{line}</div>
          )}
        )}
      </div>
    );
  }
}

export default App;
