var C = require("./constants"),
Firebase = require("firebase"),
fireRef = new Firebase(C.FIREBASE);

module.exports = {
	// called at app start
	startListeningToAuth: function(){
		return function(dispatch,getState){
			fireRef.onAuth(function(authData){
				if (authData){
					dispatch({
						type: C.LOGIN_USER,
						uid: authData.uid,
						username: authData.facebook.displayName ||
						authData.facebook.username
					});
					var presenceRef =
						new Firebase(C.FIREBASE+"/.info/connected");
					var userRef =
						new Firebase(C.FIREBASE+"/presence/" + authData.uid);
					presenceRef.on("value", function(snap) {
					  if (snap.val()) {
					    userRef.set(true);
					    // Remove ourselves when we disconnect.
					    userRef.onDisconnect().remove();
					  }
					});
				} else {
					if (getState().auth.currently !== C.ANONYMOUS){ // log out if not already logged out
						dispatch({type:C.LOGOUT});
					}
				}
			});
		};
	},
	attemptLogin: function(){
		var that = this;
		return function(dispatch,getState){

			dispatch({type:C.ATTEMPTING_LOGIN});
			fireRef.authWithOAuthPopup("facebook", function(error, authData) {
				if (error) {
					dispatch({type:C.DISPLAY_ERROR,error:"Login failed! "+error});
					dispatch({type:C.LOGOUT});
				} else {
					// no need to do anything here, startListeningToAuth have already made sure that we update on changes
					that.checkIfUserExistsElseReg(authData);
				}
			});
		};
	},
	logoutUser: function(){
		return function(dispatch,getState){
			if(getState().auth.uid !== null){
				var userRef =
					new Firebase(C.FIREBASE+"/presence/" + getState().auth.uid);
				userRef.remove();
			}
			dispatch({type:C.LOGOUT}); // don't really need to do this, but nice to get immediate feedback
			fireRef.unauth();
		};
	},
	regUser: function(authData){
		var myFireRef = new Firebase(C.FIREBASE+"/users");
		myFireRef.push({
			uid: authData.uid,
			username: authData.facebook.displayName ||
			authData.facebook.username,
			timeStamp: "",
			inSchool: false,
			reggedForSchool: false
		});

	},
	checkIfUserExistsElseReg: function(authData){
		var exists = false;
		var myFireRef = new Firebase(C.FIREBASE+"/users");
		myFireRef.once("value",function(snapshot){
			snapshot.forEach(function(childSnapshot){
				var user = childSnapshot.val();
				if(user.uid == authData.uid){
					exists = true;
				}
			});
			if(!exists){
				this.regUser(authData);
			}
		}.bind(this));
	}
};
