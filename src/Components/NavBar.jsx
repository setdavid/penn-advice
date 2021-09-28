import React from "react";

export let NAV_BAR_HEIGHT = 80;

function NavBar() {

    let navbarCSS = {
        height: `${NAV_BAR_HEIGHT}px`, 
        backgroundColor: "red"
    }

    return (
        <div id="nav-bar" className="container-fluid d-block d-lg-none" style={navbarCSS}>
            NavBar
        </div>
    );
}

export default NavBar;
