var React = require('react'),
	ReactDOM = require('react-dom'),
	ReactRedux = require("react-redux"),
	Firebase = require('firebase'),
    niceFilter = require('../../helpers/niceFilter');

var Comments = React.createClass({
	render: function(){
		var _this = this;
		var comment = this.props.comments.map(function(comment, index){
			return(
				<p key={index}>
					{comment.username}:  {comment.text}
					<span
					onClick={_this.props.deleteComment.bind(null,comment[".key"])}
					style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>
						   X
					</span>
				</p>
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
		//var comments = this.state.comments;
		//var updatedComments = comments.concat([comment]);
		//this.setState({comments: updatedComments});
		this.firebaseRef =
		new Firebase("https://radiant-heat-4485.firebaseio.com/comments");
		this.firebaseRef.push({
			text: niceFilter.sanitizeText(comment),
			username: p.auth.username,
			uid: p.auth.uid
		});
		this.setState({text: ""});
	},
	deleteComment: function(key){
		var firebaseRef =
		new Firebase("https://radiant-heat-4485.firebaseio.com/comments");
   		firebaseRef.child(key).remove();
	},
	render: function(){
		return(
			<div id="chatWrapper">
				<div id="chatDiv">
					<h1>chat</h1>
					<Comments deleteComment={this.deleteComment}
						comments={this.state.comments}/>
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
					<input type="text" ref="chatInput"
						placeholder="type something.."/>
					<input type="submit" value="send"/>
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
