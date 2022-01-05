const SET_MOBILE = "SET_MOBILE";
const SET_DESKTOP = "SET_DESKTOP";
const SET_GHOST_MODE = "SET_GHOST_MODE";

export const setMobile = () => ({
    type: SET_MOBILE,
    payload: {

    }
});

export const setDesktop = () => ({
    type: SET_DESKTOP,
    payload: {

    }
});

export const setGhostMode = (ghostMode) => ({
    type: SET_GHOST_MODE,
    payload: {
        ghostMode
    }
});

const initialState = {
    modeIsMobile: false,
    ghostMode: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOBILE:
            return { ...state, modeIsMobile: true };
        case SET_DESKTOP:
            return { ...state, modeIsMobile: false };
        case SET_GHOST_MODE:
            return { ...state, ghostMode: action.payload.ghostMode };
        default:
            return state;
    };
};

export default reducer;