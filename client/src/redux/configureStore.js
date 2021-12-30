import { combineReducers, createStore } from "redux";
import modeReducer from "./ducks/mode";
import swipeReducer from "./ducks/swipe";
import mobileReducer from "./ducks/mobile";

const reducer = combineReducers({
    mode: modeReducer,
    swipe: swipeReducer,
    mobile: mobileReducer
});

const store = createStore(reducer);

export default store;