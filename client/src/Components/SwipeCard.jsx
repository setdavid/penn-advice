import React, { useEffect, useRef, useState } from "react";

function SwipeCard(props) {
    let { boundPos } = props;
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [prevCenter, setPrevCenter] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [returnPos, setReturnPos] = useState({ x: 0, y: 0 });
    const [isInitial, setIsInitial] = useState(true);

    let swipeCardCSS = {
        backgroundColor: "purple",
        width: "50vh",
        height: "75vh",
        position: "absolute",
        left: `${isInitial ? "auto" : position.x - boundPos.x + "px"}`,
        top: `${isInitial ? "auto" : position.y - boundPos.y + "px"}`
    }

    let swipeCardRef = useRef();
    useEffect(() => {
        let returnPosition = swipeCardRef.current.getBoundingClientRect();
        setReturnPos(returnPosition);
        setPosition(returnPosition);
        setIsInitial(false);
    }, [isInitial]);

    const handleMouseDown = (e) => {
        let center = {
            x: e.clientX,
            y: e.clientY
        }

        setDragging(true);
        setPrevCenter(center);
    }

    const handleEndDrag = (e) => {
        setPosition(returnPos);
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
        e.preventDefault();
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

    // Need to work on resizing
    // window.addEventListener("resize", () => {
    //     if (!isInitial) {
    //         setIsInitial(true);
    //     }
    // });

    return (
        <div ref={swipeCardRef} className={`swipe-card ${!dragging ? "swipe-card-return" : ""}`} style={swipeCardCSS}
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
