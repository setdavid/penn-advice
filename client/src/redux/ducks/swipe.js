const NO_SWIPE_CARD = "NO_SWIPE_CARD";
const NEW_SWIPE_CARD = "NEW_SWIPE_CARD";
const NEW_PERCENT_RIGHT = "NEW_PERCENT_RIGHT";

export const noSwipeCard = () => ({
    type: NO_SWIPE_CARD,
    payload: {

    }
});

export const newSwipeCard = () => ({
    type: NEW_SWIPE_CARD,
    payload: {

    }
});

export const newPercentRight = (percent) => ({
    type: NEW_PERCENT_RIGHT,
    payload: {
        percent: percent
    }
});

const initialState = {
    hasSwipeCard: true,
    percentRight: 1
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NO_SWIPE_CARD:
            return { ...state, hasSwipeCard: false };
        case NEW_SWIPE_CARD:
            return { ...state, hasSwipeCard: true };
        case NEW_PERCENT_RIGHT:
            return { ...state, percentRight: action.payload.percent };
        default:
            return state;
    };
};

export default reducer;