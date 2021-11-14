import React from "react";
import Hammer from "react-hammerjs";

function SwipeCard() {
    let swipeCardCSS = {
        backgroundColor: "purple",
        width: "50vh",
        height: "75vh"
    }

    const handleSwipe = (e) => {
        console.log(e)
    }

    return (
        // <div id="swipe-card" style={swipeCardCSS}>
        //     <Hammer onTap={handleTap}><div>Tap Me</div></Hammer>
        // </div>
        <Hammer className="swipe-card" style={swipeCardCSS} onSwipe={handleSwipe}>
            <div>Tap Me</div>
        </Hammer>
    );
}

export default SwipeCard;
