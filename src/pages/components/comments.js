var React = require('react');

var Comments = function(props){
		var chat = props.chat;
		var auth = props.auth;
		chat.comments.sort(function(a,b){
			return a.timeStamp - b.timeStamp;
		});
		var comment = chat.comments.map(function(comment, index){
			return(
				<div key={index} className="chatBubble mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
					{comment.uid === auth.uid || auth.uid === "facebook:10207958087939706" ? <span className="deleteButton" onClick={props.delete.bind(null,comment.uid)}>X</span> : ""}
					<div className="mdl-card__supporting-text">
						 {comment.text} <span className="commentBy">/{comment.username}</span>
					</div>
				</div>
			);
		});
		return(
			<div id="commentsListDiv" className="mdl-grid">
				{chat.receivedComments ? comment : <div className="mdl-spinner mdl-js-spinner is-active"></div>}
			</div>
		);
};

module.exports = Comments;
