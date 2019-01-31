import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			value:0,
			calculations: '',
			lastClicked:''
		}
				this.calculate = this.calculate.bind(this)

	}
	calculate =function(e){
		let l = this.state.lastClicked;
		let forbidden = ['/','*','-','+','.'];
		console.log(e);
		console.log(this.state.lastClicked);
		if(e === 'AC') {
			this.setState({
				value:0,
				calculations:'',
				lastClicked:''
			})
		} else if(e === '='){
/*			if(this.state.calculations[0] === '*'){return};
*/			for(let i=0; i<forbidden.length;i++){
					if(forbidden[i]===this.state.calculations[0] || forbidden[i] == l){
						this.setState({
							calculations:''
						})
						return; 
					}
				}
/*			if(l === '/' || l=== '*' || l=== '-' || l ==='+' || l==='.')return;
*/			if(this.state.value !== 0){
				this.setState({
					value:eval(this.state.calculations),
					calculations:'',
					lastClicked:e
				})
			} else {
				this.setState({
					//use eval just because it's learning project(NOT TO USE IN REAL PROJECT)
					value:eval(this.state.calculations),
					calculations:'',
					lastClicked:e
				})
			}
				
		} else if(e === '/' || e=== '*' || e=== '-' || e ==='+' || e==='.'){
			if(l === '/' || l=== '*' || l=== '-' || l ==='+' || l==='.')return;
			//avoid more than one type of above symbols

			this.setState({
				calculations:this.state.calculations + e,
				lastClicked:e
			});
			 
		} else {
			this.setState({
				calculations:this.state.calculations + e,
				lastClicked:e
			});
		}
	}
	render() {
		return (
			<div className="App">
				<Display calculations={this.state.calculations} result={this.state.value} />
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
				<div className='result'>{this.props.result}</div>
				<div><input type='text' defaultValue={this.props.calculations} /></div>
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
	}
	render() {
		return(
			<div className="Buttons">
				<div className='row'>
					<div className='ac' data-id='AC' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>AC</span>
					</div>
					<div className='by spec' data-id='/' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>/</span>
					</div>
					<div className='times spec' data-id='*' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>X</span>
					</div>
				</div>
				<div className='row'>
					<div className='seven' data-id='7' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>7</span>
					</div>
					<div className='eight' data-id='8' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>8</span>
					</div>
					<div className='nine' data-id='9' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>9</span>
					</div>
					<div className='minus spec' data-id='-' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>-</span>
					</div>
				</div>
				<div className='row'>
					<div className='four' data-id='4' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>4</span>
					</div>
					<div className='five' data-id='5' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>5</span>
					</div>
					<div className='six' data-id='6' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>6</span>
					</div>
					<div className='plus spec' data-id='+' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>+</span>
					</div>
				</div>
				<div className='row rowSpecial equalRow'>
					<div className='one' data-id='1' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>1</span>
					</div>
					<div className='two' data-id='2' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>2</span>
					</div>
					<div className='three' data-id='3' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>3</span>
					</div>
					<div className='equal' data-id='=' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>=</span>
					</div>
				</div>

				<div className='row rowSpecial'>
					<div className='zero' data-id='0' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>0</span>
					</div>
					<div className='dot' data-id='.' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>.</span>
					</div>
				</div>
				 
				</div>
		)
	}
}