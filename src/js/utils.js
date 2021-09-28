import store from "../redux/configureStore"
import { setMobile, setDesktop } from "../redux/ducks/mode";

export let initializeEventListeners = () => {
    window.addEventListener("resize", ()=>{
        let windowWidth = window.innerWidth;

        if (windowWidth < 992) {
            store.dispatch(setMobile());
        } else {
            store.dispatch(setDesktop());
        }

        console.log(windowWidth)
        console.log(store.getState().mode.modeIsMobile);
    });
}