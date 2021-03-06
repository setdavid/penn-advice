import React, { useEffect, useRef, useState } from "react";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { batch, useDispatch, useSelector } from "react-redux";
import { BUFFER_SIZE, LOAD_NEXT_BUFFER_ON_INDEX, TEST_ARR } from "../js/constants";
import { setBuffer, setNextBuffer } from "../redux/ducks/card-manager";
import { setPrevCard, newSwipeCard, setExternalSwipe, setDisplayGhost, DISPLAY_GHOST_BAR, DISPLAY_GHOST_CARD, DISPLAY_GHOST_NONE } from "../redux/ducks/swipe";
import SwipeCard from "./SwipeCard";
import { GHOST_MODE_BAR, GHOST_MODE_CARD, GHOST_MODE_NONE } from "../redux/ducks/mode";

function SwipeContent() {
    let exist = useRef(true);
    let swipeContentRef = useRef();
    let [position, setPosition] = useState({ x: 0, y: 0 });
    let { buffer, nextBuffer } = useSelector(state => state.cardManager);
    let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
    let mcHeight = useSelector(state => state.windowConfig.mcHeight);
    let externalSwipe = useSelector(state => state.swipe.externalSwipe);
    let prevCard = useSelector(state => state.swipe.prevCard);
    let displayGhost = useSelector(state => state.swipe.displayGhost);
    let ghostMode = useSelector(state => state.mode.ghostMode);

    let dispatch = useDispatch();

    let swipeContentCSS = {}

    let timer = useRef(0);
    let debounce = (callback) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(callback, 50, exist);
    }

    let useDebounce = () => {
        debounce((exist) => {
            if (exist.current) {
                setPosition(swipeContentRef.current.getBoundingClientRect());
            }
        });
    }

    useEffect(() => {
        window.addEventListener("resize", useDebounce);
        setPosition(swipeContentRef.current.getBoundingClientRect());

        return () => {
            window.removeEventListener("resize", useDebounce);
            exist.current = false;
        }
    }, []);

    let [index, setIndex] = useState(0);
    let hasSwipeCard = useSelector(state => state.swipe.hasSwipeCard);

    useEffect(() => {
        if (!hasSwipeCard) {
            if (index >= BUFFER_SIZE - 1) {
                setIndex(0);
                dispatch(setBuffer(nextBuffer));
            } else {
                setIndex(index + 1);
            }

            if (index == LOAD_NEXT_BUFFER_ON_INDEX) {
                // fetch("/api/get_cards")
                //     .then(res => res.json())
                //     .then(data => {
                //         dispatch(setNextBuffer(data));
                //     }, err => console.log(err));

                dispatch(setNextBuffer(TEST_ARR));
            }

            if (ghostMode == GHOST_MODE_BAR) {
                dispatch(setDisplayGhost(DISPLAY_GHOST_BAR));

                // window.setTimeout(() => {
                //     dispatch(setDisplayGhost(DISPLAY_GHOST_NONE));
                // }, 1000);
            } else if (ghostMode == GHOST_MODE_CARD) {
                dispatch(setDisplayGhost(DISPLAY_GHOST_CARD));
            }

            batch(() => {
                dispatch(newSwipeCard());
                dispatch(setPrevCard(currObj));
            });
        }
    }, [hasSwipeCard]);

    const handleClickSwipeBtns = (direction) => {
        if (externalSwipe == 0 && displayGhost == DISPLAY_GHOST_NONE) {
            dispatch(setExternalSwipe(direction));
        }
    }

    let currObj = buffer[index];
    let nextObj = buffer[index + 1];

    const emptyObj = {
        type: "Penn Life",
        postIndex: "?",
        body: "NO NEW CONTENT (but swiping is fun :) )",
        rightCount: Math.random() * 100,
        leftCount: Math.random() * 100,
    };

    if (index + 1 >= BUFFER_SIZE) {
        nextObj = nextBuffer[index + 1 - BUFFER_SIZE];
    }

    if (currObj === undefined) {
        currObj = emptyObj;
    }

    if (nextObj === undefined) {
        nextObj = emptyObj;
    }

    return (
        <div ref={swipeContentRef} id="swipe-content" className="full-height container-fluid" style={swipeContentCSS}>
            <div className={`row ${modeIsMobile ? "full-height" : ""}`} style={{ height: `${modeIsMobile ? "" : `${0.87 * mcHeight}px`}` }}>
                <div className="col-12 full-height d-flex justify-content-center align-items-center" onClick={() => dispatch(setDisplayGhost(DISPLAY_GHOST_NONE))} onTouchEnd={() => dispatch(setDisplayGhost(DISPLAY_GHOST_NONE))}>
                    <SwipeCard immobile boundPos={position} color="#000000" infoObj={nextObj} />
                    {hasSwipeCard ? <SwipeCard immobile={displayGhost != DISPLAY_GHOST_NONE ? true : false} boundPos={position} color="#000000" infoObj={currObj} /> : ""}
                    <SwipeCard immobile ghost boundPos={position} color="#000000" infoObj={prevCard} />
                </div>
            </div>
            {modeIsMobile ? "" :
                <div className="row" style={{
                    height: `${0.13 * mcHeight}px`
                }}>
                    <div className="col-12 d-flex justify-content-center">
                        <div className="swipe-btn left-swipe-btn clickable" onClick={() => handleClickSwipeBtns(-1)}>
                            <div>
                                L
                            </div>
                        </div>
                        <div className="swipe-btn middle-swipe-btn clickable" style={{ fontSize: "3vh" }} onClick={() => dispatch(setDisplayGhost(DISPLAY_GHOST_CARD))}>
                            <div>
                                <FontAwesomeIcon icon={faUndo} />
                            </div>
                        </div>
                        <div className="swipe-btn right-swipe-btn clickable" onClick={() => handleClickSwipeBtns(1)}>
                            <div>
                                W
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default SwipeContent;
