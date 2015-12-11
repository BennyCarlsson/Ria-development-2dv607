var React = require('react'),
    ReactRedux = require("react-redux"),
	C = require("../../constants"),
    actions = require("../../actions");

var UserList = React.createClass({
    getInitialState: function(){
            return{userList: []};
    },
    componentWillMount: function(){
        var myFireBase = new Firebase("https://radiant-heat-4485.firebaseio.com/users");
		myFireBase.on("value", function(snap){
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
                    this.setState({userList: newUsers});
                }.bind(this));
            }.bind(this));
		}.bind(this));
    },
    render: function(){
        return(
            <div>
                <p>UserList</p>
                <Users users={this.state.userList}/>
            </div>
        );
    }
});
var Users = React.createClass({
    render: function(){
        var user = this.props.users.map(function(user, index){
            if(user.status === true){
                return <li key={index} className="online">{user.username}</li>;
            }else{
                return <li key={index} className="offline">{user.username}</li>;
            }

        });
        return(
            <ul>
                {user}
            </ul>
        );
    }
});

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {

	};
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(UserList);
