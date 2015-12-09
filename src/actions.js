var C = require("./constants");
module.exports = {
    login: function(){
        console.log("login");
        return {
                    type: C.LOGIN_USER,
    				uid: 5,
    				username: "Benny"
                };
    },
    logout: function(){
        console.log("logout");
        return {type:C.LOGOUT};
    }
};
