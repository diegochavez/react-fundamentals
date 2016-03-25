import React from 'react';
import ReactDOM from 'react-dom';
// class App extends React.Component {
// 	render(){
// 		return <div>Hello React 2016</div>
// 	}
// }

// Component always need a single element to render

//a Stateless component
//const App = () => <h1>Nice React ES6</h1>

class App extends React.Component {
	render(){
		let text = this.props.text
		let cat = this.props.cat
		return (
			<div>
				<h1>{text} {cat}</h1>
			</div>
		)
	}
}

// This adds some type validation to your componets inputs like number or string validation.
App.propTypes = {
	text: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired,
}
// defaultProps adds a default text to the text prop I declared on my component
App.defaultProps = {
	text: 'This is default text'
}

ReactDOM.render(<App cat={4}/>, document.getElementById('app'))
