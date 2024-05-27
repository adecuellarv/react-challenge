import { actionTypes } from "../reducer/word";

export const setWord1 = (word) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.SET_WORD1, payload: word });
    };
};

export const setWord2 = (word) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.SET_WORD2, payload: word });
    };
};