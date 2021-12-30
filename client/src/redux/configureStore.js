import { combineReducers, createStore } from "redux";
import modeReducer from "./ducks/mode";
import swipeReducer from "./ducks/swipe";
import mobileReducer from "./ducks/mobile";
import windowConfigReducer from "./ducks/window-config";

const reducer = combineReducers({
    mode: modeReducer,
    swipe: swipeReducer,
    mobile: mobileReducer,
    windowConfig: windowConfigReducer
});

const store = createStore(reducer);

export default store;