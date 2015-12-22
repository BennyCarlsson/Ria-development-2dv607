var Redux = require("redux"),
	authReducer = require("./auth"),
	chatReducer = require("./chat");

var rootReducer = Redux.combineReducers({
	auth: authReducer,
	chat: chatReducer
});

module.exports = rootReducer;
