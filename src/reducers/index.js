import successReducers from "./successReducers";
import guessedWord from './guessedWordReducer';
const { combineReducers } = require("redux");

export default combineReducers({ success: successReducers, guessedWord });
