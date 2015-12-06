var React = require('react');

var Authentication = React.createClass({
    loginOnClick: function(){
        console.log("login");
        this.setState({authenticated: true});
    },
    logoutClick: function(){
        console.log("logout");
        this.setState({authenticated: false});
    },
    getInitialState: function(){
        return{authenticated: false};
    },
    render: function(){
        if(this.state.authenticated){
            return(
                <div id="logInDiv">
                    <p onClick={this.logoutClick}>
                        Logout
                    </p>
                </div>
            );
        }else{
            return(
                <div id="logInDiv" onClick={this.loginClick}>
                    <p onClick={this.logoutClick}>
                        Login Github
                    </p>
                </div>
            );
        }

    }
});

var LoginButton = React.createClass({
    render: function(){
        return(
            <p>
                Login Github
            </p>
        );
    }
});

var LogoutButton = React.createClass({
    render: function(){
        return(
            <p>
                Logout
            </p>
        );
    }
});

module.exports = Authentication;
