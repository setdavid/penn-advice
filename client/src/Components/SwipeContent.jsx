import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUFFER_SIZE, LOAD_NEXT_BUFFER_ON_INDEX } from "../js/constants";
import { setBuffer, setNextBuffer } from "../redux/ducks/card-manager";
import { newPercentRight, newSwipeCard, setExternalSwipe } from "../redux/ducks/swipe";
import SwipeCard from "./SwipeCard";
import { TITLE_BAR_HEIGHT, NAV_BAR_HEIGHT } from "../js/constants";

function SwipeContent() {
    let exist = useRef(true);
    let swipeContentRef = useRef();
    let [position, setPosition] = useState({ x: 0, y: 0 });
    let { buffer, nextBuffer } = useSelector(state => state.cardManager);
    let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
    let mcHeight = useSelector(state => state.windowConfig.mcHeight);
    let externalSwipe = useSelector(state => state.swipe.externalSwipe);

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
    let dispatch = useDispatch();

    useEffect(() => {
        if (!hasSwipeCard) {
            if (index >= BUFFER_SIZE - 1) {
                setIndex(0);
                dispatch(setBuffer(nextBuffer));
            } else {
                setIndex(index + 1);
            }

            if (index == LOAD_NEXT_BUFFER_ON_INDEX) {
                fetch("/api/get_cards")
                    .then(res => res.json())
                    .then(data => {
                        dispatch(setNextBuffer(data));
                    }, err => console.log(err));
            }

            dispatch(newSwipeCard());
            dispatch(newPercentRight(currObj.percentRight));
        }
    }, [hasSwipeCard]);

    let currObj = buffer[index];
    let nextObj = buffer[index + 1];

    const emptyObj = {
        type: "Penn Life",
        index: "?",
        text: "NO NEW CONTENT (but swiping is fun :) )",
        percentRight: Math.random(),
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
                <div className="col-12 full-height d-flex justify-content-center align-items-center">
                    <SwipeCard immobile={true} boundPos={position} color="#000000" infoObj={nextObj} />
                    {hasSwipeCard ? <SwipeCard immobile={false} boundPos={position} color="#000000" infoObj={currObj} /> : ""}
                </div>
            </div>
            {modeIsMobile ? "" :
                <div className="row" style={{
                    height: `${0.13 * mcHeight}px`
                }}>
                    <div className="col-12 d-flex justify-content-center">
                        <div className="swipe-btn left-swipe-btn clickable" onClick={() => {
                            if (externalSwipe == 0) {
                                dispatch(setExternalSwipe(-1));
                            }
                        }}>
                            <div>
                                L
                            </div>
                        </div>
                        <div className="swipe-btn right-swipe-btn clickable" onClick={() => {
                            if (externalSwipe == 0) {
                                dispatch(setExternalSwipe(1));
                            }
                        }}>
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
