import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClone, faUserNinja } from "@fortawesome/free-solid-svg-icons"
import { TITLE_BAR_HEIGHT } from "./TitleBar";
import { NAV_BAR_HEIGHT } from "./NavBar";
// import { setDisplay, SWIPE_CONTENT, PERSONAL_CONTENT } from "../redux/ducks/mobile";

export let SIDE_BAR_WIDTH = 60;
export let DESKTOP_DISPLAY_TRANSITION_DURATION = 250

function SideBar() {
    let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
    // let display = useSelector(state => state.mobile.display);
    const dispatch = useDispatch();

    let displayBtnCSS = {
        color: "white",
        transitionDuration: `${DESKTOP_DISPLAY_TRANSITION_DURATION}ms`
    };

    let notDisplayBtnCSS = {
        color: "#424242",
        transitionDuration: `${DESKTOP_DISPLAY_TRANSITION_DURATION}ms`
    };

    let sidebarCSS = {
        display: `${modeIsMobile ? "none" : "block"}`,
        height: `calc(${window.innerHeight}px - ${TITLE_BAR_HEIGHT}px - ${modeIsMobile ? NAV_BAR_HEIGHT : 0}px)`,
        width: `${SIDE_BAR_WIDTH}px`,
        background: "red"
    }

    return (
        <div id="side-bar" className="" style={sidebarCSS}>
            {/* <div className="row full-height">
                <div className="col-6 full-height nav-bar-btn" onClick={() => dispatch(setDisplay(SWIPE_CONTENT))}>
                    <FontAwesomeIcon icon={faClone} size="lg" style={display == SWIPE_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
                </div>
                <div className="col-6 full-height nav-bar-btn" onClick={() => dispatch(setDisplay(PERSONAL_CONTENT))}>
                    <FontAwesomeIcon icon={faUserNinja} size="lg" style={display == PERSONAL_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
                </div>
            </div> */}
        </div>
    );
}

export default SideBar;
