import { actionTypes } from "../reducer/word";

export const setWord = (word) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.SET_WORD, word });
    };
}