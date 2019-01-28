import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     value:0
    }
  }
  calculate =function(e){
    console.log(e);
  }
  render() {
    return (
      <div className="App">
        <Display value={this.state.value}/>
        <Buttons calculate={this.calculate}/>
      </div>
    );
  }
}

export default App;

class Display extends Component {
  render() {
    return(
      <div className="Display">
        <div>{this.props.value}</div>
      </div>
    )
  }
}

class Buttons extends Component {


  handleClick = function(e) {
    this.props.calculate(e);
  }
  render() {
    return(
      <div className="Buttons">
        <div className='row'>
          <div className='ac' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>AC</span>
          </div>
          <div className='by' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>/</span>
          </div>
          <div className='times' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>X</span>
          </div>
        </div>
        <div className='row'>
          <div className='seven' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>7</span>
          </div>
          <div className='eight' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>8</span>
          </div>
          <div className='nine' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>9</span>
          </div>
          <div className='minus' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>-</span>
          </div>
        </div>
        <div className='row'>
          <div className='four' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>4</span>
          </div>
          <div className='five' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>5</span>
          </div>
          <div className='six' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>6</span>
          </div>
          <div className='plus' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>+</span>
          </div>
        </div>
        <div className='row rowSpecial equalRow'>
          <div className='one' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>1</span>
          </div>
          <div className='two' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>2</span>
          </div>
          <div className='three' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>3</span>
          </div>
          <div className='equal' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>=</span>
          </div>
        </div>

        <div className='row rowSpecial'>
          <div className='zero' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>0</span>
          </div>
          <div className='dot' onClick={(event)=>this.handleClick(event.target.className)}>
          <span>.</span>
          </div>
        </div>
         
        </div>
    )
  }
}