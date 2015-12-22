var C = require("../../constants"),
	initialState = require("../initialstate");

    module.exports = function(currentstate,action){
    	switch(action.type){
    		case C.RECEIVING_COMMENTS:
			return Object.assign({},currentstate,{
				comments: action.comments,
				receivedComments: true
			});
    		default: return currentstate || initialState.chat;
    	}
    };
