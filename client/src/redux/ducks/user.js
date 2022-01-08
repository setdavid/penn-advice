const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_CARDS = "SET_USER_CARDS";

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    payload: {
        userData
    }
});

export const setUserCards = (userCards) => ({
    type: SET_USER_CARDS,
    payload: {
        userCards
    }
});


const initialState = {
    userData: {},
    userCards: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, userData: action.payload.userData };
        case SET_USER_CARDS:
            return { ...state, userCards: action.payload.userCards };
        default:
            return state;
    };
};

export default reducer;