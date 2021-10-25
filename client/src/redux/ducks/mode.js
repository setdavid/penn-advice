const SET_MOBILE = "SET_MOBILE";
const SET_DESKTOP = "SET_DESKTOP";

export const setMobile= () => ({
    type: SET_MOBILE,
    payload: {

    }
});

export const setDesktop = () => ({
    type: SET_DESKTOP,
    payload: {

    }
});

const initialState = {
    modeIsMobile: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOBILE:
            return { ...state, modeIsMobile: true };
        case SET_DESKTOP:
            return { ...state, modeIsMobile: false };
        default:
            return state;
    };
};

export default reducer;