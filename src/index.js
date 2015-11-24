var React = require('react'),
	ReactDOM = require('react-dom');

var MainDiv = React.createClass({
	getInitialState: function(){
		return {message: ""};
	},
	onButtonClick: function(e){
		this.setState({message: "Hello Worlds!"});
	},
	render: function(){
		return(
			<div>
				<button onClick={this.onButtonClick}>Hello Worlds!</button>
				<h1>{this.state.message}</h1>
			</div>
		);
	}
});
ReactDOM.render(
  <MainDiv/>,
  document.getElementById('content')
);
