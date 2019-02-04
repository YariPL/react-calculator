import React, { Component } from 'react';
import './App.css';
//TO DO:
//show 0 on start

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			value:0,
			calculations: '0',
			lastClicked:''
		}
		this.calculate = this.calculate.bind(this)

	}


	calculate =function(e){
		
		console.log(e);
		let l = this.state.lastClicked;
		let forbidden = ['/','*','-','+','.'];

		//this change value from standard 0 to clicked
		if(this.state.calculations[0] === '0' && e !== 'AC') {
			console.log('nu')
			if(e === '=')return;
			if(e === '.'){
				this.setState({calculations: '0.'}, () => {
					console.log('t0000his.state.calculations');
				});
				return;
			} else {
				this.setState({calculations: e}, () => {
				    console.log('t11111his.state.calculations');

				});
				return;
			}
		} else if(e === 'AC') {
			console.log('ac');
			this.setState({
				value:0,
				calculations:'0',
				lastClicked:''
			})
			return;
		} else if(e === '='){
		console.log('else if(e === "=")');
		

			//block typing second zero
			if(this.state.calculations[0] === '0' && this.state.calculations[1] === '0') {
				console.log('this.state.calculations')
				console.log(this.state.calculations[0])

				console.log('both 0')
								console.log(this.state.calculations)

				this.setState({
					value:'invalid',
					calculations:''
				})

				return;
			}
			//if empty do nothing
			if(this.state.calculations === '' ) {
				console.log('empty')
				return;
			}

			//if first letter if forbidden return invalid
			for(let i=0; i<forbidden.length;i++){
				console.log('forbidden');
				if(forbidden[i]===this.state.calculations || forbidden[i] === l){
					this.setState({
/*						value:'invalid',
*/						calculations:'0'
					})
					return; 
				}
			}
			/*//return result of calculations
			this.setState({
				value:eval(this.state.calculations),
				calculations:'',
				lastClicked:e
			})
			return; */


			if(this.state.value === 0){
				console.log(e);
				this.setState({
					value:eval(this.state.calculations),
					calculations:'0',
					lastClicked:e
				})
				return;
			} else {
				console.log('else not 0 hello')
				this.setState({
					value:eval(this.state.value + this.state.calculations),
					calculations:'0',
					lastClicked:e
				})
				return;

			}


			
		} else if(e === '/' || e=== '*' || e=== '-' || e ==='+' || e==='.'){
						console.log('else if(e === '/'');

			//evoild two forbidden in row
			if(l === '/' || l=== '*' || l=== '-' || l ==='+' || l==='.')return;

			this.setState({
				calculations:this.state.calculations + e,
				lastClicked:e
			});
			 
			 return;
		} else {
			console.log('else just else');
						console.log(this.state.calculations);

			console.log(e);
			this.setState({
				calculations:this.state.calculations + e,
				lastClicked:e
			});
			return;
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
				<div id="display" className='result'>{this.props.result}</div>
				<div className='input'>{this.props.calculations}</div>
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
					<div id="clear" className='ac' data-id='AC' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>AC</span>
					</div>
					<div id="divide" className='by spec' data-id='/' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>/</span>
					</div>
					<div id="multiply" className='times spec' data-id='*' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>X</span>
					</div>
				</div>
				<div className='row'>
					<div id="seven" className='seven' data-id='7' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>7</span>
					</div>
					<div id="eight" className='eight' data-id='8' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>8</span>
					</div>
					<div id="nine" className='nine' data-id='9' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>9</span>
					</div>
					<div id="subtract" className='minus spec' data-id='-' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>-</span>
					</div>
				</div>
				<div className='row'>
					<div id="four"className='four' data-id='4' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>4</span>
					</div>
					<div id="five"className='five' data-id='5' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>5</span>
					</div>
					<div id="six"className='six' data-id='6' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>6</span>
					</div>
					<div  id="add" className='plus spec' data-id='+' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>+</span>
					</div>
				</div>
				<div className='row rowSpecial equalRow'>
					<div id="one" className='one' data-id='1' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>1</span>
					</div>
					<div id="two" className='two' data-id='2' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>2</span>
					</div>
					<div id="three" className='three' data-id='3' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>3</span>
					</div>
					<div id="equals"className='equal' data-id='=' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>=</span>
					</div>
				</div>

				<div className='row rowSpecial'>
					<div id="zero" className='zero' data-id='0' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>0</span>
					</div>
					<div id="decimal" className='dot' data-id='.' onClick={(event)=>this.handleClick(event.currentTarget.getAttribute('data-id'))}>
						<span>.</span>
					</div>
				</div>
				 
				</div>
		)
	}
}