import React, { useState } from "react";

function SwipeCard(props) {
    let { boundPos } = props
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [prevCenter, setPrevCenter] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);

    let swipeCardCSS = {
        backgroundColor: "purple",
        width: "50vh",
        height: "75vh",
        position: "absolute",
        left: `${position.x - boundPos.x}px`,
        top: `${position.y - boundPos.y}px`
    }

    // const handlePan = (e) => {
    //     let newPosition = {
    //         x: position.x + (e.center.x - prevCenter.x),
    //         y: position.y + (e.center.y - prevCenter.y), 
    //     }

    //     let center = {
    //         x: e.center.x,
    //         y: e.center.y
    //     }

    //     console.log("position: " + newPosition.x);
    //     console.log("center: " + e.center.x);
    //     console.log("prevCetner: " + prevCenter.x);


    //     setPosition(newPosition);
    //     setPrevCenter(center);
    // }

    const handleMouseDown = (e) => {
        let center = {
            x: e.clientX,
            y: e.clientY
        }

        setDragging(true);
        setPrevCenter(center);
    }

    const handleEndDrag = (e) => {
        setDragging(false);
    }

    const handleMouseMove = (e) => {
        if (dragging) {
            let clientX = e.clientX;
            let clientY = e.clientY;

            let newPosition = {
                x: position.x + (clientX - prevCenter.x),
                y: position.y + (clientY - prevCenter.y)
            }

            let center = {
                x: clientX,
                y: clientY
            }

            setPosition(newPosition);
            setPrevCenter(center);
        }
    }

    const handleTouchStart = (e) => {
        let center = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }

        setDragging(true);
        setPrevCenter(center);
    }

    const handleTouchMove = (e) => {
        if (dragging) {
            let clientX = e.touches[0].clientX;
            let clientY = e.touches[0].clientY;

            let newPosition = {
                x: position.x + (clientX - prevCenter.x),
                y: position.y + (clientY - prevCenter.y)
            }

            let center = {
                x: clientX,
                y: clientY
            }

            setPosition(newPosition);
            setPrevCenter(center);
        }
    }

    return (
        <div className="swipe-card" style={swipeCardCSS}
            onMouseDown={handleMouseDown}
            onMouseUp={handleEndDrag}
            onMouseOut={handleEndDrag}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleEndDrag}
            onTouchMove={handleTouchMove}>
            <div>Tap Me</div>
        </div>
    );
}

export default SwipeCard;
