var Redux = require('redux'),
    rootReducer = require("./reducers/auth"),
    initialState = require('./initialstate');

var reducers = Redux.combineReducers({
    auth: rootReducer
});

var store = Redux.createStore(reducers, initialState);

module.exports = store;
