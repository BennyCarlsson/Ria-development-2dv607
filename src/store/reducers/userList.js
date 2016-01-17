var C = require("../../constants"),
	initialState = require("../initialstate");

module.exports = function(currentstate,action){
	switch(action.type){
		case C.GET_USERS:
		return Object.assign({},currentstate,{
			userList: action.userList
		});
		default: return currentstate || initialState.userList;
	}
};
