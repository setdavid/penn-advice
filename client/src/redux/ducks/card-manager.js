const SET_BUFFER = "SET_BUFFER";
const SET_NEXT_BUFFER = "SET_NEXT_BUFFER";

export const setBuffer = (buffer) => ({
    type: SET_BUFFER,
    payload: {
        buffer
    }
});

export const setNextBuffer = (nextBuffer) => ({
    type: SET_NEXT_BUFFER,
    payload: {
        nextBuffer
    }
});

const initialState = {
    buffer: [],
    nextBuffer: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUFFER:
            return { ...state, buffer: action.payload.buffer };
        case SET_NEXT_BUFFER:
            return { ...state, nextBuffer: action.payload.nextBuffer };
        default:
            return state;
    };
};

export default reducer;