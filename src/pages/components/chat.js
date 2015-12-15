var React = require('react'),
	ReactDOM = require('react-dom'),
	ReactRedux = require("react-redux"),
	Firebase = require('firebase'),
	Bootstrap = require('react-bootstrap'),
    niceFilter = require('../../helpers/niceFilter'),
	Button = require('react-bootstrap').Button,
	Input = require('react-bootstrap').Input;

var Comments = React.createClass({
	render: function(){
		var _this = this;
		this.props.comments.sort(function(a,b){
			return a.timeStamp - b.timeStamp;
		});
		var comment = this.props.comments.map(function(comment, index){
			return(
				<div key={index} className="chatBubble">
					<p>
						 {comment.text} <span className="commentBy">/{comment.username}</span>
					</p>
				</div>
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
	getInitialState: function() {
    	return {comments: []};
	},
	componentWillMount: function() {
		this.firebaseRef =
		new Firebase("https://radiant-heat-4485.firebaseio.com/comments");
			this.firebaseRef.limitToLast(20).on("value",
			function(dataSnapshot) {
				var getComments = [];
				dataSnapshot.forEach(function(childSnapshot){
					var getComment = childSnapshot.val();
					getComment.timeStamp = new Date(getComment.timeStamp);
					getComment[".key"] = childSnapshot.key();
					getComments.push(getComment);
				}.bind(this));
			this.setState({comments: getComments});
		}.bind(this));
  	},
	componentWillUnmount: function() {
   		this.firebaseRef.off();
 	},
	addComment: function(comment){
		var p = this.props;
		this.firebaseRef =
		new Firebase("https://radiant-heat-4485.firebaseio.com/comments/"+p.auth.uid);

		this.firebaseRef.remove();
		this.firebaseRef.set({
			timeStamp: Firebase.ServerValue.TIMESTAMP,
			text: niceFilter.sanitizeText(comment),
			username: p.auth.username,
			uid: p.auth.uid
		});
		this.setState({text: ""});
	},
	render: function(){
		return(
			<div id="chatWrapper"  className="col-md-4">
				<div id="chatDiv">
					<Comments comments={this.state.comments}/>
					<FormWrapper addComment={this.addComment}/>
				</div>
			</div>
		);
	}
});
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

var mapStateToProps = function(appState){
	// This component will have access to
	//`appState.auth` through `this.props.auth`
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {

	};
};
module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(ChatWrapper);
