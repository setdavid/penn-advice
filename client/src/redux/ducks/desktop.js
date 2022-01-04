const SET_DISPLAY_DESKTOP = "SET_DISPLAY_DESKTOP";
export const ACCOUNT_CONTENT = "ACCOUNT_CONTENT";
export const PERSONAL_CONTENT = "PERSONAL_CONTENT";

export const setDisplayDesktop = (display) => ({
    type: SET_DISPLAY_DESKTOP,
    payload: {
        display
    }
});

const initialState = {
    display: PERSONAL_CONTENT
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DISPLAY_DESKTOP:
            return { ...state, display: action.payload.display };
        default:
            return state;
    };
};

export default reducer;