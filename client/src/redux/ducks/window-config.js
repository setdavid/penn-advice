const SET_WINDOW_HEIGHT = "SET_WINDOW_HEIGHT";

export const setWindowHeight = (windowHeight) => ({
    type: SET_WINDOW_HEIGHT,
    payload: {
        windowHeight
    }
});

const initialState = {
    windowHeight: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WINDOW_HEIGHT:
            return { ...state, windowHeight: action.payload.windowHeight };
        default:
            return state;
    };
};

export default reducer;