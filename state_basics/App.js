import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		this.state = { text : 'this is a text'}
		this.update = this.update.bind(this)
	}
	update(e){
		this.setState({text: e.target.value})
	}
	render(){
		return (
			<div>
				<Widget text={this.state.text} update={this.update} />
			</div>
		)
	}
}

//Stateless Component
const Widget = (props) => {
		return (
			<div>
				<input type="text"
					onChange={props.update}
					/>
				<h1>{props.text}</h1>
			</div>
		)
}

ReactDOM.render(<App/>, document.getElementById('app'))
