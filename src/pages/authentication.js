var React = require('react'),
    ReactRedux = require("react-redux"),
	C = require("../constants"),
    actions = require("../actions");

var Authentication = React.createClass({
    render: function(){
        var p = this.props, auth = p.auth;
        console.log(p);
        console.log(auth);
        switch(auth.currently){
            case C.LOGGED_IN:
                return(
                    <div id="logInDiv">
                        <p onClick={p.logout}>
                            Logout
                        </p>
                    </div>
                );
            case C.AWAITING_AUTH_RESPONSE:
                return(
                    <div id="logInDiv">
                        <p>
                            authenticating...
                        </p>
                    </div>
                );
            default:
                return(
                    <div id="logInDiv">
                        <p onClick={p.login}>
                            Logins Github
                        </p>
                    </div>
                );
        }
    }
});

// now we connect the component to the Redux store:

var mapStateToProps = function(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {
		attemptLogin: function(){ dispatch(actions.login()); },
		logoutUser: function(){ dispatch(actions.logout()); }
	};
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Authentication);
