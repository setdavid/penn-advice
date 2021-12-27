import React from "react";
import { useSelector } from "react-redux";

export let NAV_BAR_HEIGHT = 80;

function NavBar() {
    let modeIsMobile = useSelector(state => state.mode.modeIsMobile);

    let navbarCSS = {
        display: `${modeIsMobile ? "block": "none"}`,
        height: `${NAV_BAR_HEIGHT}px`, 
        backgroundColor: "red"
    }

    return (
        <div id="nav-bar" className="container-fluid" style={navbarCSS}>
            NavBar
        </div>
    );
}

export default NavBar;
