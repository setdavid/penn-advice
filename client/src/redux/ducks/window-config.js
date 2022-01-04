const SET_MC_HEIGHT = "SET_MC_HEIGHT";

export const setMCHeight = (mcHeight) => ({
    type: SET_MC_HEIGHT,
    payload: {
        mcHeight
    }
});

const initialState = {
    mcHeight: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MC_HEIGHT:
            return { ...state, mcHeight: action.payload.mcHeight };
        default:
            return state;
    };
};

export default reducer;