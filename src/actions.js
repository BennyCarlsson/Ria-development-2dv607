module.exports = {
    login: function(){
        console.log("login");
        return dispatch({
                    type: C.LOGIN_USER,
    				uid: authData.uid,
    				username: "Benny"
                });
    },
    logout: function(){
        console.log("logout");
        return dispatch({type:C.LOGOUT});
    }
};
