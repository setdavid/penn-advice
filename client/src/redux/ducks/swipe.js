const NO_SWIPE_CARD = "NO_SWIPE_CARD";
const NEW_SWIPE_CARD = "NEW_SWIPE_CARD";
const SET_PREV_CARD = "SET_PREV_CARD";
const SET_DISPLAY_GHOST = "SET_DISPLAY_GHOST";
export const DISPLAY_GHOST_NONE = "DISPLAY_GHOST_NONE";
export const DISPLAY_GHOST_BAR = "DISPLAY_GHOST_BAR";
export const DISPLAY_GHOST_CARD = "DISPLAY_GHOST_CARD";
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

export const setPrevCard = (prevCard) => ({
    type: SET_PREV_CARD,
    payload: {
        prevCard
    }
});

export const setDisplayGhost = (displayGhost) => ({
    type: SET_DISPLAY_GHOST,
    payload: {
        displayGhost
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
    prevCard: {
        type: "Nah",
        index: "",
        text: ":)",
        percentRight: 0.5
    },
    displayGhost: DISPLAY_GHOST_NONE,
    externalSwipe: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NO_SWIPE_CARD:
            return { ...state, hasSwipeCard: false };
        case NEW_SWIPE_CARD:
            return { ...state, hasSwipeCard: true };
        case SET_PREV_CARD:
            return { ...state, prevCard: action.payload.prevCard };
        case SET_DISPLAY_GHOST:
            return action.payload.displayGhost == DISPLAY_GHOST_NONE ?
                { ...state, displayGhost: action.payload.displayGhost, externalSwipe: 0 } :
                { ...state, displayGhost: action.payload.displayGhost };
        case SET_EXTERNAL_SWIPE:
            return { ...state, externalSwipe: action.payload.externalSwipe };
        default:
            return state;
    };
};

export default reducer;