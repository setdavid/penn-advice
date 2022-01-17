import { faDoorOpen, faUserSecret, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { LOGIN_TRANSITION_DURATION, SWITCH_SIZE } from "../js/constants";
import { reduxReset } from "../redux/configureStore";
import { setDisplayApp, setLoggedIn } from "../redux/ducks/login";
import { setGhostMode, GHOST_MODE_NONE, GHOST_MODE_BAR } from "../redux/ducks/mode";
import { setUserData } from "../redux/ducks/user";

function AccountContent(props) {
    let accountContentCSS = {}
    let [confirmPassword, setConfirmPassword] = useState("");
    let [confirmDeleteUser, setConfirmDeleteUser] = useState(false);
    let [note, setNote] = useState("");

    let dispatch = useDispatch();
    let ghostMode = useSelector(state => state.mode.ghostMode);
    let userData = useSelector(state => state.user.userData);

    const handleLogOut = () => {
        dispatch(setLoggedIn(false));
        dispatch(setUserData({}));

        window.setTimeout(() => {
            dispatch(reduxReset());
        }, LOGIN_TRANSITION_DURATION);
    }

    const handleDeleteUser = (e) => {
        e.preventDefault();

        const body = {
            username: userData.username,
            password: confirmPassword
        }

        fetch(`/user`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    clearFields();
                    handleLogOut();
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

    const clearFields = () => {
        setConfirmPassword("");
        setNote("");
    }

    return (
        <div id="account-content" className="col-12 full-height" style={accountContentCSS}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center" style={{ marginTop: "5vh" }}>
                    <FontAwesomeIcon icon={faUserSecret} size="6x" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center" style={{ marginTop: "10px" }}>
                    <h2>
                        {userData.username}
                    </h2>
                </div>
            </div>
            <div className="row">
                <div id="preferences" className="col-12 account-content-header">
                    <div className="row">
                        <div className="col-12">
                            <h5>
                                Preferences
                            </h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Show Ghost Bar After Swipe
                        </div>
                        <div className="col-6">
                            <div id="ghost-mode-switch" className="d-flex clickable" style={{ height: `${SWITCH_SIZE}px` }}
                                onClick={() => {
                                    if (ghostMode != GHOST_MODE_NONE) {
                                        dispatch(setGhostMode(GHOST_MODE_NONE));
                                    } else {
                                        dispatch(setGhostMode(GHOST_MODE_BAR));
                                    }
                                }}>
                                <div id="ghost-mode-switch-dot" style={{
                                    width: `${SWITCH_SIZE}px`,
                                    height: `${SWITCH_SIZE}px`,
                                    left: `${ghostMode != GHOST_MODE_NONE ? `calc(100% - ${SWITCH_SIZE}px)` : "0"}`,
                                    background: `${ghostMode != GHOST_MODE_NONE ? "white" : "var(--text-color-1)"}`
                                }}>
                                </div>
                                <div className="switch-comp" style={{ width: `${ghostMode != GHOST_MODE_NONE ? 100 : 0}%`, minWidth: `${ghostMode != GHOST_MODE_NONE ? 100 : 0}%`, backgroundColor: "var(--theme-color-1)" }} />
                                <div className="switch-comp" style={{ width: `${ghostMode != GHOST_MODE_NONE ? 0 : 100}%`, minWidth: `${ghostMode != GHOST_MODE_NONE ? 0 : 100}%`, backgroundColor: "var(--theme-color-4)" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="account-settings" className="col-12 account-content-header">
                    <div className="row">
                        <div className="col-12">
                            <h5>
                                Account Settings
                            </h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Log Out
                        </div>
                        <div className="col-6">
                            <FontAwesomeIcon icon={faDoorOpen} size="lg" className="clickable" onClick={handleLogOut} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            Delete User
                        </div>
                        <div className="col-6">
                            <FontAwesomeIcon icon={faUserSlash} size="lg" className="clickable" onClick={() => setConfirmDeleteUser(true)} />
                        </div>
                    </div>
                    <div className="row toggle-height" style={{ maxHeight: `${confirmDeleteUser ? "100%" : "0"}`, borderBottom: "solid 1px var(--text-color-1)" }}>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    Are you sure? All user data will be deleted...
                                </div>
                                <div className="col-6">
                                    <button onClick={() => {
                                        setConfirmDeleteUser(false);
                                        clearFields();
                                    }} className="std-btn">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                            <form onSubmit={handleDeleteUser} style={{ paddingBottom: "13px" }}>
                                <div className="row">
                                    <div className="col-6" style={{ border: "none" }}>
                                        <label>
                                            Confirm Password
                                            <br />
                                            {note == "" ? "" : <span style={{ color: "red", fontSize: "0.75rem" }}>
                                                {note}
                                            </span>}
                                            <input
                                                style={{ width: "100%" }}
                                                type="text"
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                onChange={e => setConfirmPassword(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                    <div className="col-6 d-flex align-items-end justify-content-end" style={{ border: "none" }}>
                                        <button className="std-btn" style={{ background: "var(--theme-color-1)", fontWeight: "bold" }}>
                                            DELETE USER
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AccountContent;
