import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { noSwipeCard } from "../redux/ducks/swipe";

function SwipeCard(props) {
    let { text, immobile, boundPos } = props;

    let exist = useRef(true);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [prevCenter, setPrevCenter] = useState({ x: 0, y: 0, timeStamp: 0 });
    const [dragging, setDragging] = useState(false);
    const [returnPos, setReturnPos] = useState({ x: 0, y: 0 });
    const [latestVel, setLatestVel] = useState(0);
    const [swipeAngle, setSwipeAngle] = useState({ theta: 0, direction: 1 });
    const [isInitial, setIsInitial] = useState(true);
    const [swiped, setSwiped] = useState(false);

    let dispatch = useDispatch();

    const VELOCITY_THRESHOLD = 2;
    const SWIPE_ANGLE_MAX = 3 * Math.PI / 8;
    const TIME_BETWEEN_SWIPES = 500;

    let swipeCardCSS = {
        // width: "50vh",
        // height: "75vh",
        // width: `${modeIsMobile ? "80vw" : "50vh"}`,
        // height: `${modeIsMobile ? "70vh" : "75vh"}`,
        left: `${isInitial ? "auto" : position.x - boundPos.x + "px"}`,
        top: `${isInitial ? "auto" : position.y - boundPos.y + "px"}`,
        opacity: `${swiped ? 0 : 1}`,
        transitionDuration: `${swiped ? TIME_BETWEEN_SWIPES + "ms" : ""}`
    }

    let timer = useRef(0);
    let debounce = (callback) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(callback, 50, exist);
    }

    let useDebounce = () => {
        debounce((exist) => {
            if (exist.current) {
                setIsInitial(true);
            }
        });
    }

    useEffect(() => {
        window.addEventListener("resize", useDebounce);

        return () => {
            window.removeEventListener("resize", useDebounce);
            exist.current = false;
            console.log("cleanup: " + text);
        }
    }, []);

    let swipeCardRef = useRef();
    const updateReturnPos = () => {
        let returnPosition = swipeCardRef.current.getBoundingClientRect();
        setReturnPos(returnPosition);
        setPosition(returnPosition);
    }

    const handleMouseDown = (e) => {
        let center = {
            x: e.clientX,
            y: e.clientY,
            timeStamp: e.timeStamp
        }

        if (isInitial) {
            updateReturnPos();
            setIsInitial(false);
        }

        setDragging(true);
        setPrevCenter(center);
    }

    const handleMouseMove = (e) => {
        if (dragging) {
            let clientX = e.clientX;
            let clientY = e.clientY;

            let dx = clientX - prevCenter.x;
            let dy = clientY - prevCenter.y;

            let newPosition = {
                x: position.x + dx,
                y: position.y + dy
            }

            let center = {
                x: clientX,
                y: clientY,
                timeStamp: e.timeStamp
            }

            velGen(dx, dy, e.timeStamp - prevCenter.timeStamp);
            setPosition(newPosition);
            setPrevCenter(center);
        }
    }

    const handleTouchStart = (e) => {
        let center = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            timeStamp: e.timeStamp
        }

        if (isInitial) {
            updateReturnPos();
            setIsInitial(false);
        }

        setDragging(true);
        setPrevCenter(center);
    }

    const handleTouchMove = (e) => {
        if (dragging) {
            let clientX = e.touches[0].clientX;
            let clientY = e.touches[0].clientY;

            let dx = clientX - prevCenter.x;
            let dy = clientY - prevCenter.y;

            let newPosition = {
                x: position.x + dx,
                y: position.y + dy
            }

            let center = {
                x: clientX,
                y: clientY,
                timeStamp: e.timeStamp
            }

            velGen(dx, dy, e.timeStamp - prevCenter.timeStamp);
            setPosition(newPosition);
            setPrevCenter(center);
        }
    }

    const handleEndDrag = (e) => {
        setDragging(false);

        if (latestVel > VELOCITY_THRESHOLD && Math.abs(swipeAngle.theta) < SWIPE_ANGLE_MAX) {
            let factor = window.innerWidth / 5;
            let ratio = Math.tan(swipeAngle.theta);
            let sign = swipeAngle.direction;

            let swipedAway = {
                x: sign * factor + position.x,
                y: sign * factor * ratio + position.y
            };

            setSwiped(true);
            setPosition(swipedAway);
            setTimeout(() => {
                dispatch(noSwipeCard());
            }, TIME_BETWEEN_SWIPES);
        } else {
            setPosition(returnPos);
        }
    }

    const velGen = (dx, dy, dt) => {
        let v = (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))) / dt;
        let theta = Math.atan(dy / dx);
        let direction = 1;

        if (dx < 0) {
            direction = -1;
        }

        setSwipeAngle({ theta, direction });
        setLatestVel(v);
        return v;
    }

    return (
        <React.Fragment>
            {immobile ? <div ref={swipeCardRef} className={"no-select swipe-card swipe-card-return"} style={swipeCardCSS}>
                {text} (immobile)
            </div> : <div ref={swipeCardRef} className={`no-select swipe-card ${!dragging && !swiped ? "swipe-card-return" : ""}`} style={swipeCardCSS}
                onMouseDown={handleMouseDown}
                onMouseUp={handleEndDrag}
                onMouseOut={handleEndDrag}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleEndDrag}
                onTouchMove={handleTouchMove}>
                {text}
            </div>}
        </React.Fragment>
    );
}

export default SwipeCard;
