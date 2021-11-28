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

    let [count, setCount] = useState(0);
    let hasSwipeCard = useSelector(state => state.swipe.hasSwipeCard);
    let dispatch = useDispatch();

    useEffect(() => {
        if (!hasSwipeCard) {
            setCount(count + 1);
            console.log("new");
            dispatch(newSwipeCard());
        }
    }, [hasSwipeCard]);

    const testArr = [{ text: "hello 1" }, { text: "hello 2" }, { text: "hello 3" }, { text: "hello 4" }];

    return (
        <div ref={swipeContentRef} id="swipe-content" className="full-height container-fluid" style={swipeContentCSS}>
            <div className="row full-height">
                <div className="col-12 full-height d-flex justify-content-center align-items-center">
                    <SwipeCard immobile={true} boundPos={position} text={count + 1} />
                    {hasSwipeCard ? <SwipeCard immobile={false} boundPos={position} text={count} /> : ""}
                </div>
            </div>
        </div>
    );
}

export default SwipeContent;
