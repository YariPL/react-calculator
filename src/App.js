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
          </div>
          <div className='by'>
          </div>
          <div className='times'>
          </div>
        </div>
        <div className='row'>
          <div className='seven'>
          </div>
          <div className='eight'>
          </div>
          <div className='nine'>
          </div>
          <div className='minus'>
          </div>
        </div>
        <div className='row'>
          <div className='four'>
          </div>
          <div className='five'>
          </div>
          <div className='six'>
          </div>
          <div className='plus'>
          </div>
        </div>
        <div className='row row4'>
          <div className='one'>
          </div>
          <div className='two'>
          </div>
          <div className='three'>
          </div>
          <div className='equal'>
          </div>
        </div>
        <div className='row row5'>
          <div className='zero'>
          </div>
          <div className='dot'>
          </div>
        </div>

      </div>
    )
  }
}