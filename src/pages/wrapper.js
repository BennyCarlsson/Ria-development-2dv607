var React = require('react'),
	ReactDOM = require('react-dom'),
	TimeComponent = require('./components/time'),
	AuthenticationComponent = require('./components/authentication'),
    Chat = require('./components/chat');

var Wrapper = React.createClass({
    render: function(){
        return(
            <div id="wrapper">
                <AuthenticationComponent/>
				<TimeComponent/>
                <Chat/>
            </div>
        );
    }
});
module.exports = Wrapper;
