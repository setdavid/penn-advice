import { combineReducers, createStore } from "redux";
import modeReducer from "./ducks/mode";
import swipeReducer from "./ducks/swipe";
import mobileReducer from "./ducks/mobile";
import windowConfigReducer from "./ducks/window-config";
import desktopReducer from "./ducks/desktop";
import cardManagerReducer from "./ducks/card-manager";
import loginReducer from "./ducks/login";
import userReducer from "./ducks/user";

const reducer = combineReducers({
    mode: modeReducer,
    swipe: swipeReducer,
    mobile: mobileReducer,
    windowConfig: windowConfigReducer,
    desktop: desktopReducer,
    cardManager: cardManagerReducer,
    login: loginReducer,
    user: userReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;