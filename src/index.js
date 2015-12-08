/*jshint sub:true*/
var React = require('react'),
	ReactDOM = require('react-dom'),
	Provider = require('react-redux').Provider,
	store = require('./store'),
	Chat = require('./pages/chat');

//Chatwrapper from pages/chat.js starts the whole thing..
//should probably be changed later
ReactDOM.render(
	<Provider store={store}>
		<Chat/>
      </Provider>,
  document.getElementById('content')
);
