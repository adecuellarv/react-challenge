import { combineReducers } from "redux";
import wordReducer from './word';

const reducer = combineReducers({
    word: wordReducer
});

export default reducer;