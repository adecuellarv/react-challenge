import { createSelector } from "reselect";

export const getWord = createSelector(
    state => state.viewChallange.word,
    word => word
);