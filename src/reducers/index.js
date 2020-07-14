import successReducers from "./successReducers";

const { combineReducers } = require("redux");

export default combineReducers({ success: successReducers });
