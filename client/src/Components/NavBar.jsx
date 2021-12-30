import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClone, faUserNinja } from "@fortawesome/free-solid-svg-icons"
import { setDisplay, SWIPE_CONTENT, PERSONAL_CONTENT } from "../redux/ducks/mobile";

export let NAV_BAR_HEIGHT = 50;

function NavBar() {
    let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
    let display = useSelector(state => state.mobile.display);
    const dispatch = useDispatch();

    let displayBtnCSS = {
        color: "white"
    };

    let notDisplayBtnCSS = {
        color: "#424242"
    };

    let navbarCSS = {
        display: `${modeIsMobile ? "block" : "none"}`,
        height: `${NAV_BAR_HEIGHT}px`
    }

    return (
        <div id="nav-bar" className="container-fluid" style={navbarCSS}>
            <div className="row full-height">
                <div className="col-6 full-height nav-bar-btn">
                    <FontAwesomeIcon icon={faClone} size="lg" style={display == SWIPE_CONTENT ? displayBtnCSS : notDisplayBtnCSS} onClick={() => dispatch(setDisplay(SWIPE_CONTENT))} />
                </div>
                <div className="col-6 full-height nav-bar-btn">
                    <FontAwesomeIcon icon={faUserNinja} size="lg" style={display == PERSONAL_CONTENT ? displayBtnCSS : notDisplayBtnCSS} onClick={() => dispatch(setDisplay(PERSONAL_CONTENT))} />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
