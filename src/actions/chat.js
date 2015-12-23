var C = require("../constants"),
Firebase = require("firebase");

module.exports = {
    getComments: function(){
		return function(dispatch,getState){
			var _firebaseRef =
			new Firebase(C.FIREBASE+"/comments");
				_firebaseRef.limitToLast(25).on("value",
				function(dataSnapshot) {
					var getComments = [];
					dataSnapshot.forEach(function(childSnapshot){
						var getComment = childSnapshot.val();
						getComment.timeStamp = new Date(getComment.timeStamp);
						getComment[".key"] = childSnapshot.key();
						getComments.push(getComment);
					}.bind(this));
				dispatch({ type: C.RECEIVING_COMMENTS, comments: getComments });
			}.bind(this));
		};
	},
	newComment: function(comment,auth){
		return function(dispatch,getState){
			var _firebaseRef =
			new Firebase(C.FIREBASE+"/comments/"+auth.uid);
			_firebaseRef.remove();
			_firebaseRef.set({
				timeStamp: Firebase.ServerValue.TIMESTAMP,
				text: comment,
				username: auth.username,
				uid: auth.uid
			});
		};
	},
    deleteComment: function(uid){
        return function(dispatch,getState){
            var firebaseRef =
    		new Firebase(C.FIREBASE+"/comments/");
    		firebaseRef.child(uid).remove();
            console.log("delete"+uid);
        };
    }
};
