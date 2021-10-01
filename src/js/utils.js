import store from "../redux/configureStore"
import { setMobile, setDesktop } from "../redux/ducks/mode";

export let initialize = () => {
    initializeEventListeners();
    updateMode();
}

let initializeEventListeners = () => {
    window.addEventListener("resize", () => {
        updateMode();

        // console.log(windowWidth)
        // console.log(store.getState().mode.modeIsMobile);
    });
}

let updateMode = () => {
    let windowWidth = window.innerWidth;

    if (windowWidth < 992) {
        store.dispatch(setMobile());
    } else {
        store.dispatch(setDesktop());
    }
}