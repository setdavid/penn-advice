import { combineReducers, createStore } from "redux";
// import navsliderReducer from "./ducks/navslider";

const reducer = combineReducers({
    // navslider: navsliderReducer,
    
});

const store = createStore(reducer);

export default store;