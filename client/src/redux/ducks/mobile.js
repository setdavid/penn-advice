const SET_DISPLAY_MOBILE = "SET_DISPLAY_MOBILE";
export const SWIPE_CONTENT = "SWIPE_CONTENT";
export const PERSONAL_CONTENT = "PERSONAL_CONTENT";
export const ACCOUNT_CONTENT = "ACCOUNT_CONTENT";

export const setDisplayMobile = (display) => ({
    type: SET_DISPLAY_MOBILE,
    payload: {
        display
    }
});

const initialState = {
    display: SWIPE_CONTENT
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISPLAY_MOBILE:
            return { ...state, display: action.payload.display };
        default:
            return state;
    };
};

export default reducer;