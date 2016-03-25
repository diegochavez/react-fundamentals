import React from 'react';
import ReactDOM from 'react-dom';
// class App extends React.Component {
// 	render(){
// 		return <div>Hello React 2016</div>
// 	}
// }

// Component always need a single element to render

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

App.propTypes = {
	text: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired,
}

App.defaultProps = {
	text: 'This is default text'
}

ReactDOM.render(<App cat={4}/>, document.getElementById('app'))
