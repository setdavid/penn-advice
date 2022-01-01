import store from "../redux/configureStore"
import { setBuffer } from "../redux/ducks/card-manager";
import { setMobile, setDesktop } from "../redux/ducks/mode";
import { setWindowHeight } from "../redux/ducks/window-config";

export let initialize = () => {
    console.log("Initializing React App...");

    window.addEventListener("resize", () => {
        updateConfigs();
    });

    updateConfigs();

    fetch("/api/get_cards")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            store.dispatch(setBuffer(data));
        }, err => console.log(err));
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