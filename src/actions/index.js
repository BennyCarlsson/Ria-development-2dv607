var authActions = require("./auth"),
	chatActions = require("./chat"),
	userListActions =  require("./userList");

module.exports = Object.assign({},authActions,chatActions,userListActions);
