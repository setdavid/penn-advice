import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUFFER_SIZE, LOAD_NEXT_BUFFER_ON_INDEX } from "../js/constants";
import { setBuffer, setNextBuffer } from "../redux/ducks/card-manager";
import { newPercentRight, newSwipeCard } from "../redux/ducks/swipe";
import SwipeCard from "./SwipeCard";
import { TITLE_BAR_HEIGHT, NAV_BAR_HEIGHT } from "../js/constants";

function SwipeContent() {
    let exist = useRef(true);
    let swipeContentRef = useRef();
    let [position, setPosition] = useState({ x: 0, y: 0 });
    let { buffer, nextBuffer } = useSelector(state => state.cardManager);
    let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
    let mcHeight = useSelector(state => state.windowConfig.mcHeight);

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
            <div className="row full-height" style={{ height: `${modeIsMobile ? "" : `${0.9 * mcHeight}px`}` }}>
                <div className="col-12 full-height d-flex justify-content-center align-items-center">
                    <SwipeCard immobile={true} boundPos={position} color="#000000" infoObj={nextObj} />
                    {hasSwipeCard ? <SwipeCard immobile={false} boundPos={position} color="#000000" infoObj={currObj} /> : ""}
                </div>
            </div>
            <div className="row" style={{
                height: `${modeIsMobile ? "" : `${0.1 * mcHeight}px`}`
            }}>
                <div className="col-12 d-flex justify-content-center align-items-center">

                </div>
            </div>
        </div>
    );
}

export default SwipeContent;
