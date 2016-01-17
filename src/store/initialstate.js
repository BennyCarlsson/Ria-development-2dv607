
var C = require("../constants");

module.exports = {
	auth: {
		currently: C.ANONYMOUS,
		username: null,
		uid: null
	},
	chat: {
		comments: [],
		receivedComments: false
	},
	userList: {
		userList: []
	}
};
