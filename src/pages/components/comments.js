var React = require('react');

var Comments = function(props){
		props.comments.sort(function(a,b){
			return a.timeStamp - b.timeStamp;
		});
		var comment = props.comments.map(function(comment, index){
			return(
				<div key={index} className="chatBubble mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
					<div className="mdl-card__supporting-text">
						 {comment.text} <span className="commentBy">/{comment.username}</span>
					</div>
				</div>
			);
		});
		return(
			<div id="commentsListDiv" className="mdl-grid">
				{props.comments.length > 0 ? comment : <div className="mdl-spinner mdl-js-spinner is-active"></div>}
			</div>
		);
};

module.exports = Comments;
