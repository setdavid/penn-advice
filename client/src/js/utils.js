import store from "../redux/configureStore"
import { setBuffer } from "../redux/ducks/card-manager";
import { setMobile, setDesktop } from "../redux/ducks/mode";
import { setMCHeight } from "../redux/ducks/window-config";
import { NAV_BAR_HEIGHT, TEST_ARR, TITLE_BAR_HEIGHT } from "./constants";

export let initialize = () => {
    console.log("Initializing React App...");

    window.addEventListener("resize", () => {
        updateConfigs();
    });

    updateConfigs();
}

export let updateConfigs = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let modeIsMobile = !((windowWidth >= 992) && (windowWidth > windowHeight));

    if (modeIsMobile) {
        store.dispatch(setMobile());
        store.dispatch(setMCHeight(windowHeight - TITLE_BAR_HEIGHT - NAV_BAR_HEIGHT));
    } else {
        store.dispatch(setDesktop());
        store.dispatch(setMCHeight(windowHeight - TITLE_BAR_HEIGHT));
    }

    // fetch("/api/get_cards")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         store.dispatch(setBuffer(data));
    //     }, err => console.log(err));
    store.dispatch(setBuffer(TEST_ARR))
}