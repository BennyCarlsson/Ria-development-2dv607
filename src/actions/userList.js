var C = require("../constants"),
Firebase = require("firebase");

module.exports = {
    getUsers: function(){
        return function(dispatch,getState){
            var myFireBase = new Firebase("https://radiant-heat-4485.firebaseio.com/users");
                myFireBase.orderByChild("online").on("value", function(snap){
                    var newUsers = [];
                    snap.forEach(function(childSnap){
                        var newUser = childSnap.val();
                        newUsers.push(newUser);
                    }.bind(this));

                    newUsers.map(function(user,index){
                        var userRef = new Firebase('https://radiant-heat-4485.firebaseio.com/presence/' + user.uid);
                        userRef.on('value', function(snapshot) {
                            if(snapshot.val() === true){
                                user.status = true;
                            }else{
                                user.status = false;
                            }
                            //this.setState({userList: newUsers});
                            dispatch({ type: C.GET_USERS, userList: newUsers });
                        }.bind(this));
                    }.bind(this));
                }.bind(this));
        };
    }
};
