var React = require('react'),
	ReactDOM = require('react-dom'),
	ReactRedux = require("react-redux"),
	Firebase = require('firebase'),
	Bootstrap = require('react-bootstrap'),
    niceFilter = require('../../helpers/niceFilter'),
	Button = require('react-bootstrap').Button,
	Input = require('react-bootstrap').Input,
	Comments = require('./comments'),
	FormWrapper = require('./formwrapper');

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
