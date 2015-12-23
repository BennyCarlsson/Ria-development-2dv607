var React = require('react'),
    ReactRedux = require("react-redux"),
	C = require("../../constants"),
    actions = require("../../actions");

var Authentication = React.createClass({
    componentDidMount: function(){
        componentHandler.upgradeDom();
    },
    componentDidUpdate: function(){
        componentHandler.upgradeDom();
    },
    render: function(){
        var p = this.props, auth = p.auth;
        switch(auth.currently){
            case C.LOGGED_IN:
                return(
                    <div id="logInDiv" className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                        <button className="mdl-button mdl-js-button mdl-js-ripple-effect" onClick={p.logout}>
                            Logout
                        </button>
                    </div>
                );
            case C.AWAITING_AUTH_RESPONSE:
                return(
                    <div id="logInDiv" className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" disabled>
                            Login With Facebook
                        </button>
                    </div>
                );
            default:
                return(
                    <div id="logInDiv" className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"  onClick={p.login}>
                            Login With Facebook
                        </button>
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
		login: function(){ dispatch(actions.attemptLogin()); },
		logout: function(){ dispatch(actions.logoutUser()); }
	};
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Authentication);
