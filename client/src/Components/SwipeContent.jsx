import React from "react";
import SwipeCard from "./SwipeCard";

function SwipeContent() {
    let swipeContentCSS = {
        backgroundColor: "white"
    }

    return (
        <div id="swipe-content" className="full-height container-fluid" style={swipeContentCSS}>
            <div className="row full-height">
                <div className="col-12 full-height d-flex justify-content-center align-items-center">
                    <SwipeCard />
                </div>
            </div>
        </div>
    );
}

export default SwipeContent;
