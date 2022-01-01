import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBuffer, setNextBuffer } from "../redux/ducks/card-manager";
import { newPercentRight, newSwipeCard } from "../redux/ducks/swipe";
import SwipeCard from "./SwipeCard";

export const testArr = [{ type: "Penn Life", index: 0, text: "hello 0 personal", count: 353, percentRight: 0 },
{ type: "Penn Life", index: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio placerat, pulvinar felis et, sodales diam. Curabitur non libero aliquet, lacinia orci ut, iaculis ante. Aliquam lacinia commodo varius. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien sem, dictum quis vehicula ultricies, aliquet vitae risus. Nulla sit amet ex sed mi porttitor venenatis eget eget massa. Maecenas non tellus accumsan, semper quam vitae, aliquet massa. Nullam sit amet neque risus. Phasellus congue velit magna, sed posuere ex gravida ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ut ornare lorem. Sed nec sem semper, ullamcorper leo sit amet, suscipit velit.", count: 10, percentRight: 0.75 },
{ type: "Penn Life", index: 2, text: "hello 2 personal", count: 34, percentRight: 0 },
{ type: "Penn Life", index: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at odio placerat, pulvinar felis et, sodales diam. Curabitur non libero aliquet, lacinia orci ut, iaculis ante. Aliquam lacinia commodo varius. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien sem, dictum quis vehicula ultricies, aliquet vitae risus. Nulla sit amet ex sed mi porttitor venenatis eget eget massa. Maecenas non tellus accumsan, semper quam vitae, aliquet massa. Nullam sit amet neque risus. Phasellus congue velit magna, sed posuere ex gravida ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ut ornare lorem. Sed nec sem semper, ullamcorper leo sit amet, suscipit velit.", count: 50, percentRight: 1 }];

const LOAD_NEXT_BUFFER_ON_INDEX = 4;
const BUFFER_SIZE = 10;

function SwipeContent() {
    let exist = useRef(true);
    let swipeContentRef = useRef();
    let [position, setPosition] = useState({ x: 0, y: 0 });
    let { buffer, nextBuffer } = useSelector(state => state.cardManager);

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
            <div className="row full-height">
                <div className="col-12 full-height d-flex justify-content-center align-items-center">
                    <SwipeCard immobile={true} boundPos={position} color="#000000" infoObj={nextObj} />
                    {hasSwipeCard ? <SwipeCard immobile={false} boundPos={position} color="#000000" infoObj={currObj} /> : ""}
                </div>
            </div>
        </div>
    );
}

export default SwipeContent;
