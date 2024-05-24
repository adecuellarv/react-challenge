import initialState from './initialState'

export const actionTypes = {
    SET_WORD: 'SET_WORD'
}

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case actionTypes.SET_WORD: {
            return Object.assign({}, state, { word: action.payload })
        }
        default:
            return state
    }
}

export default reducer;