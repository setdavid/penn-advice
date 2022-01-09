import store from "../redux/configureStore"
import { setBuffer } from "../redux/ducks/card-manager";
import { setMobile, setDesktop } from "../redux/ducks/mode";
import { setUserCards } from "../redux/ducks/user";
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
    store.dispatch(setBuffer(TEST_ARR));
}

export let getUserCards = async (userPosts) => {
    return new Promise(async (resolve, reject) => {
        if (userPosts) {
            let userCards = new Array(userPosts.length);

            for (let i = 0; i < userPosts.length; i++) {
                await fetch(`/posts?postIndex=${userPosts[i]}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            userCards[i] = data.data;
                        } else {
                            console.log(`SERVER ERROR: ${data.msg}`);
                        }
                    }, (err) => {
                        console.log("SERVER ERROR");
                    });
            }

            store.dispatch(setUserCards(userCards));
            console.log(userCards)
            resolve({ success: true });
        } else {
            reject({ success: false, msg: "invalid userPosts array" });
        }
    });
}