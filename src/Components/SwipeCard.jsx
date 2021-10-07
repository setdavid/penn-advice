import React from "react";

function SwipeCard() {
    let swipeCardCSS = {
        backgroundColor: "purple",
        width: "50vh",
        height: "75vh"
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("mousedown")
    }

    return (
        <div id="swipe-card" style={swipeCardCSS}
            onMouseDown={e => handleMouseDown(e)}>

        </div>
    );
}

export default SwipeCard;
