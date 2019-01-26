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
        <div class='row'>

        </div>
        <div class='row'>
          <div class='ac'>
          </div>
          <div class='by'>
          </div>
          <div class='times'>
          </div>
        </div>
        <div class='row'>
          <div class='seven'>
          </div>
          <div class='eight'>
          </div>
          <div class='nine'>
          </div>
          <div class='minus'>
          </div>
        </div>
        <div class='row'>
          <div class='four'>
          </div>
          <div class='five'>
          </div>
          <div class='six'>
          </div>
          <div class='plus'>
          </div>
        </div>
        <div class='row'>
        
        </div>
         
      </div>
    )
  }
}