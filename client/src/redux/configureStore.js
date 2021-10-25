import { combineReducers, createStore } from "redux";
import modeReducer from "./ducks/mode";

const reducer = combineReducers({
    mode: modeReducer
});

const store = createStore(reducer);

export default store;