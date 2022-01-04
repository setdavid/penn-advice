const NO_SWIPE_CARD = "NO_SWIPE_CARD";
const NEW_SWIPE_CARD = "NEW_SWIPE_CARD";
const NEW_PERCENT_RIGHT = "NEW_PERCENT_RIGHT";
const SET_EXTERNAL_SWIPE = "SET_EXTERNAL_SWIPE";

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

export const setExternalSwipe = (externalSwipe) => ({
    type: SET_EXTERNAL_SWIPE,
    payload: {
        externalSwipe
    }
});

const initialState = {
    hasSwipeCard: true,
    percentRight: 1,
    externalSwipe: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NO_SWIPE_CARD:
            return { ...state, hasSwipeCard: false };
        case NEW_SWIPE_CARD:
            return { ...state, hasSwipeCard: true };
        case NEW_PERCENT_RIGHT:
            return { ...state, percentRight: action.payload.percent };
        case SET_EXTERNAL_SWIPE:
            return { ...state, externalSwipe: action.payload.externalSwipe };
        default:
            return state;
    };
};

export default reducer;