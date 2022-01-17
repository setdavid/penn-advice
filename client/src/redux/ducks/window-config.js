const SET_MC_HEIGHT = "SET_MC_HEIGHT";
const SET_WINDOW_DIMS = "SET_WINDOW_DIMS";

export const setMCHeight = (mcHeight) => ({
    type: SET_MC_HEIGHT,
    payload: {
        mcHeight
    }
});

export const setWindowDims = (windowDims) => ({
    type: SET_WINDOW_DIMS,
    payload: {
        windowDims
    }
});

const initialState = {
    mcHeight: 0,
    windowDims: { width: 0, height: 0 }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MC_HEIGHT:
            return { ...state, mcHeight: action.payload.mcHeight };
        case SET_WINDOW_DIMS:
            return { ...state, windowDims: action.payload.windowDims };
        default:
            return state;
    };
};

export default reducer;