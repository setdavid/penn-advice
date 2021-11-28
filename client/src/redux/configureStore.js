import { combineReducers, createStore } from "redux";
import modeReducer from "./ducks/mode";
import swipeReducer from "./ducks/swipe";


const reducer = combineReducers({
    mode: modeReducer,
    swipe: swipeReducer
});

const store = createStore(reducer);

export default store;