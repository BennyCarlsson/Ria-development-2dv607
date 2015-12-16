var React = require('react'),
	Bootstrap = require('react-bootstrap'),
	Button = require('react-bootstrap').Button,
	Input = require('react-bootstrap').Input;

var FormWrapper = React.createClass({
	getInitialState: function() {
    	return {value: ""};
	},
	handleChange: function() {
	    this.setState({
	      value: this.refs.chatInput.getValue()
	    });
  	},
	handleSubmit: function(e){
		e.preventDefault();
		var chatInput = this.refs.chatInput.getValue().trim();
		if(!chatInput){
			return;
		}
		this.props.addComment(chatInput);
		this.clearInput();
		//this.refs.chatInput.getDOMNode.value = "";
	},
	clearInput: function() {
    	this.setState({ value: "" });
  	},
	render: function(){
		return(
			<div id="formWrapper">
				<form id="chatForm" className="form-inline" onSubmit={this.handleSubmit}>
					<Input type="text"
						ref="chatInput"
						value={this.state.value}
						placeholder="type something.."
						onChange={this.handleChange}/>
					<Button className="btn btn-default pull-right" value="send" type="submit">Skicka</Button>
				</form>
			</div>
		);
	}
});

module.exports = FormWrapper;