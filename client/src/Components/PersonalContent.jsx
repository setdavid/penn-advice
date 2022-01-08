import React, { useState } from "react";
import PersonalCard from "./PersonalCard";

import { TEST_ARR } from "../js/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function PersonalContent(props) {
    let personalContentCSS = {};
    let [createCard, setCreateCard] = useState(false);
    let [note, setNote] = useState("");
    let [text, setText] = useState("");
    let userData = useSelector(state => state.user.userData);

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

    const handleSubmit = () => {
        const body = {
            username: userData.username,
            body: text
        }

        fetch(`/user/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => {
                // setLoading(false);
                return res.json();
            })
            .then(data => {
                if (data.success) {
                    clearFields();
                    setCreateCard(false);
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
    }

    return (
        <div id="personal-content" className="col-12 full-height" style={personalContentCSS}>
            <div className="row">
                <div className="col-12" id="personal-content-header">
                    Personal Content
                </div>
            </div>
            <div className="row personal-card clickable" onClick={() => setCreateCard(true)}>
                <div className="col-12 personal-card-title">
                    + Create New Card
                </div>
            </div>
            <div id="personal-content-create-card" className="row toggle-height personal-card" style={{ ...createCardCSS, maxHeight: `${createCard ? "100%" : "0"}` }}>
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={handleSubmit} style={{ fontFamily: "inherit" }}>
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
                            <div onClick={() => {
                                setCreateCard(false);
                                clearFields();
                            }} className="clickable std-btn">
                                Cancel
                            </div>
                            <div onClick={handleSubmit} className="clickable std-btn">
                                Submit
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <PersonalCard infoObj={TEST_ARR[0]} />
            <PersonalCard infoObj={TEST_ARR[1]} />
            <PersonalCard infoObj={TEST_ARR[2]} />
            <PersonalCard infoObj={TEST_ARR[3]} />
        </div >
    );
}

export default PersonalContent;
