/*jshint sub:true*/
var React = require('react'),
	ReactDOM = require('react-dom'),
	Provider = require('react-redux').Provider,
	store = require('./store'),
	Wrapper = require('./pages/wrapper'),
	actions = require('./actions');

//Chatwrapper from pages/chat.js starts the whole thing..
//should probably be changed later
ReactDOM.render(
	<Provider store={store}>
		<Wrapper/>
      </Provider>,
  document.getElementById('content')
);
// setup Firebase listeners
setTimeout(function(){
	store.dispatch( actions.startListeningToAuth() );
	store.dispatch( actions.getComments() );
});
