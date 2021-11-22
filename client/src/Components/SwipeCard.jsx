import React, { useState } from "react";
import Hammer from "react-hammerjs";

function SwipeCard(props) {
    let { boundPos } = props
    const [position, setPosition] = useState({ x: 0, y: 0});
    const [prevCenter, setPrevCenter] = useState({ x: 0, y: 0});

    let swipeCardCSS = {
        backgroundColor: "purple",
        width: "50vh",
        height: "75vh",
        position: "absolute",
        left: `${position.x - boundPos.x}px`,
        top: `${position.y - boundPos.y}px`
    }

    const handlePan = (e) => {
        // console.log(position);
        console.log(e);

        let newPosition = {
            x: position.x + (e.center.x - prevCenter.x),
            y: position.y + (e.center.y - prevCenter.y), 
        }

        let center = {
            x: e.center.x,
            y: e.center.y
        }

        setPosition(newPosition);
        setPrevCenter(center);
    }

    const handleMouseDown = (e) => {
        console.log(e)

        let center = {
            x: e.clientX,
            y: e.clientY
        }

        setPrevCenter(center);
    }

    return (
        // <div id="swipe-card" style={swipeCardCSS}>
        //     <Hammer onTap={handleTap}><div>Tap Me</div></Hammer>
        // </div>
        <Hammer className="swipe-card" style={swipeCardCSS} onPan={handlePan} onMouseDown={handleMouseDown}>
            <div>Tap Me</div>
        </Hammer>
    );
}

export default SwipeCard;
