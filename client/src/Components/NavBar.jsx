import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClone, faUserSecret, faPenSquare } from "@fortawesome/free-solid-svg-icons"
import { setDisplayMobile, SWIPE_CONTENT, PERSONAL_CONTENT, ACCOUNT_CONTENT } from "../redux/ducks/mobile";

export let NAV_BAR_HEIGHT = 60;
export let MOBILE_DISPLAY_TRANSITION_DURATION = 250

function NavBar() {
    let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
    let display = useSelector(state => state.mobile.display);
    const dispatch = useDispatch();

    let displayBtnCSS = {
        color: "white",
        transitionDuration: `${MOBILE_DISPLAY_TRANSITION_DURATION}ms`
    };

    let notDisplayBtnCSS = {
        color: "var(--theme-color-4)",
        transitionDuration: `${MOBILE_DISPLAY_TRANSITION_DURATION}ms`
    };

    let navbarCSS = {
        display: `${modeIsMobile ? "block" : "none"}`,
        height: `${NAV_BAR_HEIGHT}px`
    }

    return (
        <div id="nav-bar" className="container-fluid" style={navbarCSS}>
            <div className="row full-height">
                <div className="col-4 full-height nav-bar-btn" onClick={() => dispatch(setDisplayMobile(ACCOUNT_CONTENT))}>
                    <FontAwesomeIcon icon={faUserSecret} size="lg" style={display == ACCOUNT_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
                </div>
                <div className="col-4 full-height nav-bar-btn" onClick={() => dispatch(setDisplayMobile(SWIPE_CONTENT))}>
                    <FontAwesomeIcon icon={faClone} size="lg" style={display == SWIPE_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
                </div>
                <div className="col-4 full-height nav-bar-btn" onClick={() => dispatch(setDisplayMobile(PERSONAL_CONTENT))}>
                    <FontAwesomeIcon icon={faPenSquare} size="lg" style={display == PERSONAL_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
                </div>
            </div>
        </div>
    );
}

export default NavBar;