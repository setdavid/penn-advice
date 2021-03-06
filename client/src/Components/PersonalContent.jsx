import React, { useState } from "react";
import PersonalCard from "./PersonalCard";

import { TEST_ARR } from "../js/constants";
import { useDispatch, useSelector } from "react-redux";
import { getUserCards } from "../js/utils";
import { setUserIsFetching } from "../redux/ducks/user";

function PersonalContent(props) {
    let personalContentCSS = {};
    let [createCard, setCreateCard] = useState(false);
    let [note, setNote] = useState("");
    let [text, setText] = useState("");
    let [loading, setLoading] = useState(false);
    let user = useSelector(state => state.user);
    let userData = user.userData;
    let userCards = user.userCards;
    let userIsFetching = user.userIsFetching;
    let dispatch = useDispatch();

    let createCardCSS = {}

    if (createCard) {
        createCardCSS = {

        }
    } else {
        createCardCSS = {
            paddingTop: "0",
            paddingBottom: "0",
            border: "none"
        }
    }

    const clearFields = () => {
        setNote("");
        setText("");
    }

    const handleSubmit = async () => {
        if (userIsFetching) return
        dispatch(setUserIsFetching(true));
        setLoading(true);

        const body = {
            poster: userData.username,
            body: text,
            type: "Penn Life"
        }

        await fetch(`/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(async data => {
                if (data.success) {
                    console.log(data);

                    await fetch(`/user/posts?username=${userData.username}`)
                        .then(res => res.json())
                        .then(async data => {
                            if (data.success) {
                                await getUserCards(data.data).then(res => {
                                    clearFields();
                                    setCreateCard(false);
                                }).catch(rej => {
                                    setNote(rej.msg);
                                });
                            } else {
                                if (typeof data.msg == "string") {
                                    setNote(data.msg);
                                } else {
                                    setNote("SERVER ERROR");
                                }
                            }
                        }, (err) => {
                            setNote("SERVER ERROR");
                        });
                } else {
                    if (typeof data.msg == "string") {
                        setNote(data.msg);
                    } else {
                        setNote("SERVER ERROR");
                    }
                }
            }, (err) => {
                setNote("SERVER ERROR");
            });

        setLoading(false);
        dispatch(setUserIsFetching(false));
    }

    let keyIndex = 0;
    let personalCardsArr = new Array(userCards.length);

    for (let i = userCards.length - 1; i >= 0; i--) {
        personalCardsArr[userCards.length - 1 - i] = <PersonalCard key={keyIndex} infoObj={userCards[i]} />;
        keyIndex++;
    }

    let personalCardsComp = <React.Fragment>
        {/* {userCards.map((cardObj) => {
            keyIndex++;
            return <PersonalCard key={keyIndex} infoObj={cardObj} />
        })} */}
        {personalCardsArr}
    </React.Fragment>

    return (
        <div id="personal-content" className="col-12 full-height" style={personalContentCSS}>
            <div className="row">
                <div className="col-12">
                    <h3 id="personal-content-header">
                        Personal Content
                    </h3>
                </div>
            </div>
            <div className="row personal-card clickable" onClick={() => setCreateCard(true)}>
                <div className="col-12">
                    <h6 style={{ marginBottom: "0" }}>
                        + Create New Card
                    </h6>
                </div>
            </div>
            {loading ? <div className="row">
                <div className="col-12 loading-wrapper">
                    <div className="loading" />
                </div>
            </div> : ""}
            <div id="personal-content-create-card" className="row toggle-height personal-card" style={{ ...createCardCSS, maxHeight: `${createCard ? "100%" : "0"}` }}>
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <form style={{ fontFamily: "inherit" }}>
                                <label>
                                    What would you like to say?
                                    <br />
                                    {note == "" ? "" : <span style={{ color: "red", fontSize: "0.75rem" }}>
                                        {note}
                                    </span>}
                                    <textarea
                                        style={{ width: "100%", maxWidth: "100%", height: "100px", fontFamily: "inherit" }}
                                        type="text"
                                        name="text"
                                        value={text}
                                        onChange={e => setText(e.target.value)}
                                    />
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <button onClick={() => {
                                setCreateCard(false);
                                clearFields();
                            }} className="std-btn">
                                Cancel
                            </button>
                            <button onClick={handleSubmit} className="std-btn">
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {personalCardsComp}
            {/* <PersonalCard infoObj={TEST_ARR[0]} />
            <PersonalCard infoObj={TEST_ARR[1]} />
            <PersonalCard infoObj={TEST_ARR[2]} />
            <PersonalCard infoObj={TEST_ARR[3]} /> */}
        </div >
    );
}

export default PersonalContent;
