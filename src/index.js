var React = require('react'),
	ReactDOM = require('react-dom');

var MainDiv = React.createClass({
	getInitialState: function(){
		return {message: ""};
	},
	onButtonClick: function(e){
		this.setState({message: "Hello World!"});
	},
	render: function(){
		return(
			<div id="divId">
				<button onClick={this.onButtonClick}>Hello World!</button>
				<h1>{this.state.message}</h1>
			</div>
		);
	}
});

var Comments = React.createClass({
	render: function(){
		var comment = this.props.comments.map(function(comment){
			return(
				<p>{comment}</p>
			);
		});
		return(
			<div id="commentsListDiv">
				{comment}
			</div>
		);
	}
});
var ChatWrapper = React.createClass({
	addComment: function(comment){
		var comments = this.state.comments;
		var updatedComments = comments.concat([comment]);
		this.setState({comments: updatedComments});
	},
	getInitialState: function() {
    	return {comments: []};
	},
	render: function(){
		return(
			<div id="chatWrapper">
				<div id="chatDiv">
					<h1>chat</h1>
					<Comments comments={this.state.comments}/>
					<FormWrapper addComment={this.addComment}/>
				</div>
			</div>
		);
	}
});
var FormWrapper = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var chatInput = this.refs.chatInput.value.trim();
		if(!chatInput){
			return;
		}
		this.props.addComment(chatInput);
		this.refs.chatInput.value = "";
	},
	render: function(){
		return(
			<div id="formWrapper">
				<form id="chatForm" onSubmit={this.handleSubmit}>
					<input type="text" ref="chatInput" placeholder="type something.."/>
					<input type="submit" value="send"/>
				</form>
			</div>
		);
	}
});

ReactDOM.render(
  <ChatWrapper/>,
  document.getElementById('content')
);
