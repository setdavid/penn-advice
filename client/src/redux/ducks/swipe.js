const NO_SWIPE_CARD = "NO_SWIPE_CARD";
const NEW_SWIPE_CARD = "NEW_SWIPE_CARD";

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

const initialState = {
    hasSwipeCard: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NO_SWIPE_CARD:
            return { ...state, hasSwipeCard: false };
        case NEW_SWIPE_CARD:
            return { ...state, hasSwipeCard: true };
        default:
            return state;
    };
};

export default reducer;