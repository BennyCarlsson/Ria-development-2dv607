var React = require('react'),
	ReactDOM = require('react-dom'),
	ReactRedux = require("react-redux"),
	actions = require("../../actions"),
	Comments = require('./comments'),
	FormWrapper = require('./formwrapper');

var ChatWrapper = React.createClass({
	componentDidMount: function(){
        componentHandler.upgradeDom();
    },
    componentDidUpdate: function(){
        componentHandler.upgradeDom();
    },
	addComment: function(comment){
		this.props.newComment(comment,this.props.auth);
	},
	render: function(){
		return(
			<div id="chatWrapper"  className="mdl-cell mdl-cell--6-col">
				<div id="chatDiv">
					<Comments chat={this.props.chat} auth={this.props.auth} delete={this.props.deleteComment}/>
					{this.props.chat.receivedComments ? <FormWrapper addComment={this.addComment}/> : ""}
				</div>
			</div>
		);
	}
});

var mapStateToProps = function(appState){
	// This component will have access to
	//appState.auth` through `this.props.auth`
	return {chat:appState.chat, auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {
		newComment: function(comment,auth){ dispatch(actions.newComment(comment,auth)); },
		deleteComment: function(uid){ dispatch(actions.deleteComment(uid)); }
	};
};
module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(ChatWrapper);
