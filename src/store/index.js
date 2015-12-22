var Redux = require('redux'),
    rootReducer = require("./reducers"),
    initialState = require('./initialstate'),
    thunk = require('redux-thunk'); // allows us to use asynchronous actions

    module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(rootReducer,initialState);
