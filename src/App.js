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
        <div className='row'>
          <div className='ac'>
          <span>AC</span>
          </div>
          <div className='by'>
          <span>/</span>
          </div>
          <div className='times'>
          <span>X</span>
          </div>
        </div>
        <div className='row'>
          <div className='seven'>
          <span>7</span>
          </div>
          <div className='eight'>
          <span>8</span>
          </div>
          <div className='nine'>
          <span>9</span>
          </div>
          <div className='minus'>
          <span>-</span>
          </div>
        </div>
        <div className='row'>
          <div className='four'>
          <span>4</span>
          </div>
          <div className='five'>
          <span>5</span>
          </div>
          <div className='six'>
          <span>6</span>
          </div>
          <div className='plus'>
          <span>+</span>
          </div>
        </div>
        <div className='row rowSpecial equalRow'>
          <div className='one'>
          <span>1</span>
          </div>
          <div className='two'>
          <span>2</span>
          </div>
          <div className='three'>
          <span>3</span>
          </div>
          <div className='equal'>
          <span>=</span>
          </div>
        </div>

        <div className='row rowSpecial'>
          <div className='zero'>
          <span>0</span>
          </div>
          <div className='dot'>
          <span>.</span>
          </div>
        </div>
         
        </div>
    )
  }
}