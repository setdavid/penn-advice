const SET_LOGGED_IN = "SET_LOGGED_IN";

export const setLoggedIn = (loggedIn) => ({
    type: SET_LOGGED_IN,
    payload: {
        loggedIn
    }
});


const initialState = {
    loggedIn: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_IN:
            return { ...state, loggedIn: action.payload.loggedIn };
        default:
            return state;
    };
};

export default reducer;