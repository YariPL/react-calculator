import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Buttons />
      </div>
    );
  }
}

export default App;

class Display extends Component {
  render() {
    return(
      <div className="Display">

      </div>
    )
  }
}

class Buttons extends Component {
  render() {
    return(
      <div className="Buttons">
      </div>
    )
  }
}