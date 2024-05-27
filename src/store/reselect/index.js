import { createSelector } from "reselect";

export const getWord1 = createSelector(
    state => state.viewChallange.word1,
    word1 => word1
);

export const getWord2 = createSelector(
    state => state.viewChallange.word2,
    word2 => word2
);