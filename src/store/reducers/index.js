var Redux = require("redux"),
	authReducer = require("./auth"),
	chatReducer = require("./chat"),
	userListReducer = require("./userList");

var rootReducer = Redux.combineReducers({
	auth: authReducer,
	chat: chatReducer,
	userList: userListReducer
});

module.exports = rootReducer;
