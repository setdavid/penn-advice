const SET_USER_DATA = "SET_USER_DATA";

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    payload: {
        userData
    }
});


const initialState = {
    userData: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, userData: action.payload.userData };
        default:
            return state;
    };
};

export default reducer;