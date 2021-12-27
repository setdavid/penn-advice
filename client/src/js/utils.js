import store from "../redux/configureStore"
import { setMobile, setDesktop } from "../redux/ducks/mode";

export let initialize = () => {
    initializeEventListeners();
    updateMode();
}

let initializeEventListeners = () => {
    window.addEventListener("resize", () => {
        updateMode();
    });
}

let updateMode = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

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