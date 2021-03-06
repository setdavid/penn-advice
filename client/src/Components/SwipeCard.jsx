import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TIME_BETWEEN_SWIPES, CARD_SWIPE_ANGLE_MAX, CARD_VELOCITY_THRESHOLD, CARD_MIN_DISTANCE_THRESHOLD, CARD_ASPECT_RATIO, GHOST_CARD_TRANSITION_DURATION } from "../js/constants";
import { DISPLAY_GHOST_BAR, DISPLAY_GHOST_CARD, DISPLAY_GHOST_NONE, noSwipeCard, setDisplayGhost, setExternalSwipe } from "../redux/ducks/swipe";

function SwipeCard(props) {
    let { infoObj, immobile, boundPos, color, ghost } = props;

    let exist = useRef(true);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [prevCenter, setPrevCenter] = useState({ x: 0, y: 0, timeStamp: 0 });
    const [dragging, setDragging] = useState(false);
    const [returnPos, setReturnPos] = useState({ x: 0, y: 0 });
    const [latestVel, setLatestVel] = useState(0);
    const [swipeAngle, setSwipeAngle] = useState({ theta: 0, direction: 1 });
    const [isInitial, setIsInitial] = useState(true);
    const [swiped, setSwiped] = useState(false);
    const [external, setExternal] = useState(0);

    let dispatch = useDispatch();
    let mcHeight = useSelector(state => state.windowConfig.mcHeight);
    let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
    let externalSwipe = useSelector(state => state.swipe.externalSwipe);
    let displayGhost = useSelector(state => state.swipe.displayGhost);

    useEffect(() => {
        if (externalSwipe != 0 && !immobile && !swiped && exist.current) {
            if (isInitial) {
                updateReturnPos();
                setIsInitial(false);
            }

            setSwipeAngle({
                direction: externalSwipe,
                theta: 0
            });

            setExternal(2);
        }
    }, [externalSwipe]);

    useEffect(() => {
        if (external == 2) {
            window.setTimeout(() => {
                setExternal(1);
                setPosition({
                    x: returnPos.x + swipeAngle.direction * CARD_MIN_DISTANCE_THRESHOLD,
                    y: returnPos.y
                });
            }, 100);
        } else if (external == 1) {
            window.setTimeout(() => {
                swipeProcedure();
                dispatch(setExternalSwipe(0));
            }, 500);
        }
    }, [external]);

    let swipedColor = "var(--theme-color-1)";
    if (swipeAngle.direction == 1) {
        swipedColor = "var(--theme-color-2)";
    }

    let rotateDirection = 1;
    let distReturnFromBorder = returnPos.x - boundPos.x;

    let swipeCardCSS = {
        width: `${modeIsMobile ? "85vw" : 0.5 * mcHeight + "px"}`,
        height: `${modeIsMobile ? 0.95 * mcHeight + "px" : 0.5 * CARD_ASPECT_RATIO * mcHeight + "px"}`,
        left: `${isInitial ? "auto" : position.x - boundPos.x + "px"}`,
        top: `${isInitial ? "auto" : position.y - boundPos.y + "px"}`,
        opacity: `${swiped ? 0 : 1}`,
        background: `${swiped ? swipedColor : ""}`,
        transform: `rotate(${rotateDirection * (position.x - returnPos.x) / distReturnFromBorder * (distReturnFromBorder >= 0.1 * boundPos.width ? 7 : 0.5)}deg)`,
        transitionDuration: `${ghost ? (GHOST_CARD_TRANSITION_DURATION + "ms") : (swiped ? TIME_BETWEEN_SWIPES + "ms" : "")}`
    }

    if (ghost) {
        if (displayGhost == DISPLAY_GHOST_CARD) {
            swipeCardCSS = {
                ...swipeCardCSS,
                opacity: 1
            }
        } else if (displayGhost == DISPLAY_GHOST_BAR) {
            swipeCardCSS = {
                ...swipeCardCSS,
                background: "transparent",
                height: "80px",
                opacity: 1
            }
        } else {
            swipeCardCSS = {
                ...swipeCardCSS,
                opacity: 0,
                height: "0"
            }
        }
    }

    let totalCount = infoObj.leftCount + infoObj.rightCount;
    let rightPercent = 100 * infoObj.rightCount / totalCount;
    let leftPercent = 100 * infoObj.leftCount / totalCount;

    let percentBarRight = rightPercent;
    let percentBarLeft = leftPercent;

    if (displayGhost == DISPLAY_GHOST_NONE) {
        percentBarRight = 50;
        percentBarLeft = 50;
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

            if ((latestVel > CARD_VELOCITY_THRESHOLD) &&
                (Math.abs(swipeAngle.theta) < CARD_SWIPE_ANGLE_MAX) &&
                ((swipeAngle.direction == 1 && position.x - returnPos.x >= CARD_MIN_DISTANCE_THRESHOLD) ||
                    (swipeAngle.direction == -1 && returnPos.x - position.x >= CARD_MIN_DISTANCE_THRESHOLD))) {
                swipeProcedure();
            } else {
                setPosition(returnPos);
            }
        }
    }

    const swipeProcedure = () => {
        let factor = window.innerWidth / 5;
        let ratio = Math.tan(swipeAngle.theta);
        let sign = swipeAngle.direction;

        let swipedAway = {
            x: sign * factor + position.x,
            y: sign * factor * ratio + position.y
        };

        setSwiped(true);
        // setPosition(returnPos);
        setPosition(swipedAway);
        setTimeout(() => {
            dispatch(noSwipeCard());
        }, TIME_BETWEEN_SWIPES);
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

    const actualContent =
        <div className="swipe-card-actual-content" style={{ marginTop: `${0.1 * mcHeight}px`, marginBottom: `${0.1 * mcHeight}px` }}>
            <h4>
                {`${infoObj.type} #${infoObj.postIndex}`}
            </h4>
            <p>
                {infoObj.body}
            </p>
        </div >

    return (
        <React.Fragment>
            {immobile ?
                (ghost ? <div ref={swipeCardRef} className="no-select swipe-card ghost-card" style={swipeCardCSS}>
                    <div className="swipe-card-content d-flex" style={{ backgroundColor: `${swiped ? swipedColor : color}` }}>
                        <div style={{ position: "absolute", padding: `${displayGhost == DISPLAY_GHOST_BAR ? (10) : (modeIsMobile ? 0.02 * mcHeight : 0.03 * mcHeight)}px ${0.05 * mcHeight}px`, width: "100%" }}>
                            <div className="ghost-percent-bar" >
                                <div className="percent-bar" style={{ width: `${percentBarLeft}%`, minWidth: `${percentBarLeft}%`, backgroundColor: "var(--theme-color-1)", borderRight: `${leftPercent > 0 ? "2px solid white" : ""}` }} />
                                <div className="percent-bar" style={{ width: `${percentBarRight}%`, minWidth: `${percentBarRight}%`, backgroundColor: "var(--theme-color-2)", borderLeft: `${rightPercent > 0 ? "2px solid white" : ""}` }} />
                            </div>
                            <div className="d-flex justify-content-between" >
                                <div>
                                    {`${Math.round(leftPercent)}%`}
                                </div>
                                <div>
                                    {`${Math.round(rightPercent)}%`}
                                </div>
                            </div>
                        </div>
                        {displayGhost == DISPLAY_GHOST_CARD ? actualContent : ""}
                    </div>
                </div> : <div ref={swipeCardRef} className="no-select swipe-card swipe-card-return" style={swipeCardCSS}>
                    <div className="swipe-card-content d-flex" style={{ backgroundColor: `${swiped ? swipedColor : color}` }}>
                        {actualContent}
                    </div>
                </div>)
                : <div ref={swipeCardRef} className={`no-select swipe-card ${swiped ? "swipe-card-swiped" : ""} ${!dragging && !swiped ? "swipe-card-return" : ""}`} style={swipeCardCSS}
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
