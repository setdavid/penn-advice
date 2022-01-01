import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenSquare, faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { TITLE_BAR_HEIGHT } from "./TitleBar";
import { NAV_BAR_HEIGHT } from "./NavBar";
import { ACCOUNT_CONTENT, PERSONAL_CONTENT, setDisplayDesktop } from "../redux/ducks/desktop";

export let SIDE_BAR_WIDTH = 60;
export let DESKTOP_DISPLAY_TRANSITION_DURATION = 250

function SideBar() {
    let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
    let display = useSelector(state => state.desktop.display);
    const dispatch = useDispatch();

    let displayBtnCSS = {
        color: "white",
        transitionDuration: `${DESKTOP_DISPLAY_TRANSITION_DURATION}ms`,
        height: `calc(0.13 * (${window.innerHeight}px - ${TITLE_BAR_HEIGHT}px - ${modeIsMobile ? NAV_BAR_HEIGHT : 0}px))`
    };

    let notDisplayBtnCSS = {
        color: "var(--theme-color-4)",
        transitionDuration: `${DESKTOP_DISPLAY_TRANSITION_DURATION}ms`,
        height: `calc(0.13 * (${window.innerHeight}px - ${TITLE_BAR_HEIGHT}px - ${modeIsMobile ? NAV_BAR_HEIGHT : 0}px))`
    };

    let sidebarCSS = {
        display: `${modeIsMobile ? "none" : "block"}`,
        height: `calc(${window.innerHeight}px - ${TITLE_BAR_HEIGHT}px - ${modeIsMobile ? NAV_BAR_HEIGHT : 0}px)`,
        width: `${SIDE_BAR_WIDTH}px`
    }

    return (
        <div id="side-bar" className="row full-height justify-content-center align-items-center" style={sidebarCSS}>
            <div className="col-12 nav-bar-btn" onClick={() => dispatch(setDisplayDesktop(ACCOUNT_CONTENT))}>
                <FontAwesomeIcon icon={faUserSecret} size="lg" style={display == ACCOUNT_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
            </div>
            <div className="col-12 nav-bar-btn" onClick={() => dispatch(setDisplayDesktop(PERSONAL_CONTENT))}>
                <FontAwesomeIcon icon={faPenSquare} size="lg" style={display == PERSONAL_CONTENT ? displayBtnCSS : notDisplayBtnCSS} />
            </div>
        </div>
    );
}

export default SideBar;
