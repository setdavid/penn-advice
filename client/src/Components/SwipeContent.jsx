import React, { useEffect, useRef, useState } from "react";
import SwipeCard from "./SwipeCard";

function SwipeContent() {
    let swipeContentRef = useRef();
    let [position, setPosition] = useState({x: 0, y: 0});

    let swipeContentCSS = {
        backgroundColor: "white"
    }

    useEffect(()=>{
        setPosition(swipeContentRef.current.getBoundingClientRect());
    }, [swipeContentRef.current]);

    return (
        <div ref={swipeContentRef} id="swipe-content" className="full-height container-fluid" style={swipeContentCSS}>
            <div className="row full-height">
                <div className="col-12 full-height d-flex justify-content-center align-items-center">
                    <SwipeCard boundPos={position}/>
                </div>
            </div>
        </div>
    );
}

export default SwipeContent;
