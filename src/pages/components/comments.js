var React = require('react');

var Comments = function(props){
		props.comments.sort(function(a,b){
			return a.timeStamp - b.timeStamp;
		});
		var comment = props.comments.map(function(comment, index){
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
				{props.comments.length > 0 ? comment : <div className="mdl-spinner mdl-js-spinner is-active"></div>}
			</div>
		);
};

module.exports = Comments;