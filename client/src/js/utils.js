import store from "../redux/configureStore"
import { setMobile, setDesktop } from "../redux/ducks/mode";
import { setWindowHeight } from "../redux/ducks/window-config";

export let initialize = () => {
    initializeEventListeners();
    updateConfigs();
}

let initializeEventListeners = () => {
    window.addEventListener("resize", () => {
        updateConfigs();
    });
}

let updateConfigs = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    store.dispatch(setWindowHeight(windowHeight));

    // if ((windowWidth < 992) && (windowWidth < windowHeight)) {
    //     store.dispatch(setMobile());
    // } else {
    //     store.dispatch(setDesktop());
    // }

    if ((windowWidth >= 992) && (windowWidth > windowHeight)) {
        store.dispatch(setDesktop());
    } else {
        store.dispatch(setMobile());
    }
}