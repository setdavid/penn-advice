const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_CARDS = "SET_USER_CARDS";
const SET_USER_IS_FETCHING = "SET_USER_IS_FETCHING";

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

export const setUserIsFetching = (userIsFetching) => ({
    type: SET_USER_IS_FETCHING,
    payload: {
        userIsFetching
    }
});

const initialState = {
    userData: {},
    userCards: [],
    userIsFetching: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, userData: action.payload.userData };
        case SET_USER_CARDS:
            return { ...state, userCards: action.payload.userCards };
        case SET_USER_IS_FETCHING:
            return { ...state, userIsFetching: action.payload.userIsFetching };
        default:
            return state;
    };
};

export default reducer;