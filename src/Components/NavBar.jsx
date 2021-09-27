import React from "react";

export let NAV_BAR_HEIGHT = 80;

function NavBar() {

    let navbarCSS = {
        height: `${NAV_BAR_HEIGHT}px`, 
        backgroundColor: "red"
    }

    return (
        <div id="nav-bar" style={navbarCSS}>
            NavBar
        </div>
    );
}

export default NavBar;
