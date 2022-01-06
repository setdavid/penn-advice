const SET_LOGGED_IN = "SET_LOGGED_IN";
const SET_DISPLAY_APP = "SET_DISPLAY_APP";

export const setLoggedIn = (loggedIn) => ({
    type: SET_LOGGED_IN,
    payload: {
        loggedIn
    }
});

export const setDisplayApp = (displayApp) => ({
    type: SET_DISPLAY_APP,
    payload: {
        displayApp
    }
});


const initialState = {
    loggedIn: false,
    displayApp: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_IN:
            return { ...state, loggedIn: action.payload.loggedIn };
        case SET_DISPLAY_APP:
            return { ...state, displayApp: action.payload.displayApp };
        default:
            return state;
    };
};

export default reducer;