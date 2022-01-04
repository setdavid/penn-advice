const SET_LOGGED_IN = "LOGGED_IN";
const SET_LOGGED_OUT = "LOGGED_OUT";

export const setLoggedIn = () => ({
    type: SET_LOGGED_IN
});

export const setLoggedOut = () => ({
    type: SET_LOGGED_OUT
});

const initialState = {
    loggedIn: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_IN:
            return { ...state, loggedIn: true };
        case SET_LOGGED_OUT:
            return { ...state, loggedIn: false };
        default:
            return state;
    };
};

export default reducer;