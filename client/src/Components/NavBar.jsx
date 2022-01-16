import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClone, faUserSecret, faPenSquare, faUndo } from "@fortawesome/free-solid-svg-icons"
import { setDisplayMobile, SWIPE_CONTENT, PERSONAL_CONTENT, ACCOUNT_CONTENT } from "../redux/ducks/mobile";
import { MOBILE_DISPLAY_TRANSITION_DURATION, NAV_BAR_HEIGHT } from "../js/constants";
import { DISPLAY_GHOST_CARD, setDisplayGhost } from "../redux/ducks/swipe";

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
                {display == SWIPE_CONTENT ?
                    <div className="col-4 full-height nav-bar-btn" onClick={() => dispatch(setDisplayGhost(DISPLAY_GHOST_CARD))}>
                        <FontAwesomeIcon icon={faUndo} size="lg" style={display == SWIPE_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
                    </div>
                    : <div className="col-4 full-height nav-bar-btn" onClick={() => dispatch(setDisplayMobile(SWIPE_CONTENT))}>
                        <FontAwesomeIcon icon={faClone} size="lg" style={display == SWIPE_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
                    </div>}
                <div className="col-4 full-height nav-bar-btn" onClick={() => dispatch(setDisplayMobile(PERSONAL_CONTENT))}>
                    <FontAwesomeIcon icon={faPenSquare} size="lg" style={display == PERSONAL_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
