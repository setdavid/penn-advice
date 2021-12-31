import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noSwipeCard } from "../redux/ducks/swipe";

function SwipeCard(props) {
    let { infoObj, immobile, boundPos, color } = props;

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

    const VELOCITY_THRESHOLD = 1;
    const SWIPE_ANGLE_MAX = 3 * Math.PI / 8;
    const TIME_BETWEEN_SWIPES = 500;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let stateWindowHeight = useSelector(state => state.windowConfig.windowHeight);

    let swipedColor = "#990000";
    if (swipeAngle.direction == 1) {
        swipedColor = "#011F5b";
    }

    let rotateDirection = 1;
    let distReturnFromBorder = returnPos.x - boundPos.x;

    let swipeCardCSS = {
        width: `${windowWidth < windowHeight ? "85vw" : 0.5 * stateWindowHeight + "px"}`,
        height: `${windowWidth < windowHeight ? 0.7 * stateWindowHeight + "px" : 0.75 * stateWindowHeight + "px"}`,
        left: `${isInitial ? "auto" : position.x - boundPos.x + "px"}`,
        top: `${isInitial ? "auto" : position.y - boundPos.y + "px"}`,
        opacity: `${swiped ? 0 : 1}`,
        background: `${swiped ? swipedColor : ""}`,
        transform: `rotate(${rotateDirection * (position.x - returnPos.x) / distReturnFromBorder * (distReturnFromBorder >= 0.1 * boundPos.width ? 7 : 0.5)}deg)`,
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
            console.log("cleanup: " + infoObj.text);
        }
    }, []);

    let swipeCardRef = useRef();
    const updateReturnPos = () => {
        let returnPosition = swipeCardRef.current.getBoundingClientRect();
        setReturnPos(returnPosition);
        setPosition(returnPosition);
    }

    const handleMouseDown = (e) => {
        if (!swiped) {
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
    }

    const handleMouseMove = (e) => {
        if (!swiped) {
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
    }

    const handleTouchStart = (e) => {
        if (!swiped) {
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
    }

    const handleTouchMove = (e) => {
        if (!swiped) {
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
    }

    const handleEndDrag = (e) => {
        if (!swiped) {
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

    const actualContent = <div className="swipe-card-actual-content" style={{ marginTop: `${0.1 * stateWindowHeight}px`, marginBottom: `${0.05 * stateWindowHeight}px` }}>
        <div style={{ fontSize: "2rem" }}>
            {`${infoObj.type} #${infoObj.index}`}
        </div>
        <br />
        <div>
            {infoObj.text}
        </div>
    </div >

    return (
        <React.Fragment>
            {immobile ? <div ref={swipeCardRef} className={"no-select swipe-card swipe-card-return"} style={swipeCardCSS}>
                <div className="swipe-card-content d-flex" style={{ backgroundColor: `${swiped ? swipedColor : color}` }}>
                    {actualContent}
                </div>
            </div> : <div ref={swipeCardRef} className={`no-select swipe-card ${swiped ? "swipe-card-swiped" : ""} ${!dragging && !swiped ? "swipe-card-return" : ""}`} style={swipeCardCSS}
                onMouseDown={handleMouseDown}
                onMouseUp={handleEndDrag}
                onMouseOut={handleEndDrag}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleEndDrag}
                onTouchMove={handleTouchMove}>
                <div className="swipe-card-content d-flex" style={{ backgroundColor: `${swiped ? swipedColor : color}` }}>
                    {actualContent}
                </div>
            </div>}
        </React.Fragment>
    );
}

export default SwipeCard;
