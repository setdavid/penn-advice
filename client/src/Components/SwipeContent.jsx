import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newSwipeCard } from "../redux/ducks/swipe";
import SwipeCard from "./SwipeCard";

function SwipeContent() {
    let exist = useRef(true);
    let swipeContentRef = useRef();
    let [position, setPosition] = useState({ x: 0, y: 0 });

    let swipeContentCSS = {
        backgroundColor: "white",
        overflow: "hidden"
    }

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
            setIndex(index + 1);
            console.log("new");
            dispatch(newSwipeCard());
        }
    }, [hasSwipeCard]);

    const testArr = [{ text: "hello 1 testArr" }, { text: "hello 2 testArr" }, { text: "hello 3 testArr" }, { text: "hello 4 testArr" }];

    let currObj = testArr[index];
    let nextObj = testArr[index + 1];

    const emptyObj = {
        text: "No new content"
    };
    
    if (currObj === undefined) {
        currObj = emptyObj;
    }

    if (nextObj === undefined) {
        nextObj = emptyObj;
    }

    return (
        <div ref={swipeContentRef} id="swipe-content" className="full-height container-fluid" style={swipeContentCSS}>
            <div className="row full-height">
                <div className="col-12 full-height d-flex justify-content-center align-items-center">
                    <SwipeCard immobile={true} boundPos={position} text={nextObj.text} />
                    {hasSwipeCard ? <SwipeCard immobile={false} boundPos={position} text={currObj.text} /> : ""}
                </div>
            </div>
        </div>
    );
}

export default SwipeContent;
