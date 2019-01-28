import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value:0,
      calculations: ''
    }
        this.calculate = this.calculate.bind(this)

  }
  calculate =function(e){
    console.log(e);
    if(e === 'AC') {
      this.setState({
        value:0,
        calculations:0
      })
    } else if(e === '='){
      this.setState({
        calculations:eval(this.state.calculations)
      })
    } else{
      this.setState({
        value:this.state.calculations + e
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Display calculations={this.state.calculations} value={this.state.value} />
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
        <div><input type='text' defaultValue={this.props.value} /></div>
      </div>
    )
  }
}

class Buttons extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)


  }

  handleClick = function(e) {
    this.props.calculate(e);
    console.log(e);
  }
  render() {
    return(
      <div className="Buttons">
        <div className='row'>
          <div className='ac' data-id='AC' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>AC</span>
          </div>
          <div className='by' data-id='/' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>/</span>
          </div>
          <div className='times' data-id='*' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>X</span>
          </div>
        </div>
        <div className='row'>
          <div className='seven' data-id='7' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>7</span>
          </div>
          <div className='eight' data-id='8' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>8</span>
          </div>
          <div className='nine' data-id='9' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>9</span>
          </div>
          <div className='minus' data-id='-' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>-</span>
          </div>
        </div>
        <div className='row'>
          <div className='four' data-id='4' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>4</span>
          </div>
          <div className='five' data-id='5' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>5</span>
          </div>
          <div className='six' data-id='6' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>6</span>
          </div>
          <div className='plus' data-id='+' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>+</span>
          </div>
        </div>
        <div className='row rowSpecial equalRow'>
          <div className='one' data-id='1' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>1</span>
          </div>
          <div className='two' data-id='2' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>2</span>
          </div>
          <div className='three' data-id='3' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>3</span>
          </div>
          <div className='equal' data-id='=' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>=</span>
          </div>
        </div>

        <div className='row rowSpecial'>
          <div className='zero' data-id='0' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>0</span>
          </div>
          <div className='dot' data-id='.' onClick={(event)=>this.handleClick(event.target.getAttribute('data-id'))}>
            <span>.</span>
          </div>
        </div>
         
        </div>
    )
  }
}