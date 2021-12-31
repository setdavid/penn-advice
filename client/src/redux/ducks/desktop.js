const SET_DISPLAY = "SET_DISPLAY";
export const ACCOUNT_CONTENT = "ACCOUNT_CONTENT";
export const PERSONAL_CONTENT = "PERSONAL_CONTENT";

export const setDisplay = (display) => ({
    type: SET_DISPLAY,
    payload: {
        display
    }
});

const initialState = {
    display: PERSONAL_CONTENT
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISPLAY:
            return { ...state, display: action.payload.display };
        default:
            return state;
    };
};

export default reducer;