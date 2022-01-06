import { faDoorOpen, faUserSecret, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SWITCH_SIZE } from "../js/constants";
import { setLoggedIn } from "../redux/ducks/login";
import { setGhostMode, GHOST_MODE_NONE, GHOST_MODE_BAR } from "../redux/ducks/mode";

function AccountContent(props) {
    let { style } = props;
    let accountContentCSS = {}
    let [confirmPassword, setConfirmPassword] = useState("");
    let [confirmDeleteUser, setConfirmDeleteUser] = useState(false);
    let [note, setNote] = useState("");

    let dispatch = useDispatch();
    let ghostMode = useSelector(state => state.mode.ghostMode);
    let userData = useSelector(state => state.user.userData);

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
                    dispatch(setLoggedIn(false));
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
        <div id="account-content" className="full-height" style={{ ...style, ...accountContentCSS }}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center" style={{ marginTop: "5vh" }}>
                    <FontAwesomeIcon icon={faUserSecret} size="6x" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center" style={{ marginTop: "10px", fontSize: "1.5rem", fontWeight: "bold" }}>
                    User #12345
                </div>
            </div>
            <div className="row">
                <div id="preferences" className="col-12 account-content-header">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    Preferences
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
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
                </div>
            </div>
            <div className="row">
                <div id="account-settings" className="col-12 account-content-header">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    Account Settings
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    Log Out
                                </div>
                                <div className="col-6">
                                    <div onClick={() => dispatch(setLoggedIn(false))} className="clickable">
                                        <FontAwesomeIcon icon={faDoorOpen} size="lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    Delete User
                                </div>
                                <div className="col-6">
                                    <div onClick={() => setConfirmDeleteUser(true)} className="clickable">
                                        <FontAwesomeIcon icon={faUserSlash} size="lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ maxHeight: `${confirmDeleteUser ? "100%" : "0"}`, overflow: "hidden", transitionProperty: "max-height", transitionDuration: "1s", borderBottom: "solid 1px var(--text-color-1)" }}>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    Are you sure? All user data will be deleted...
                                </div>
                                <div className="col-6">
                                    <div onClick={() => {
                                        setConfirmDeleteUser(false);
                                        clearFields();
                                    }} className="clickable std-btn">
                                        Cancel
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleDeleteUser} style={{ paddingBottom: "13px" }}>
                                <div className="row" style={{ border: "none" }}>
                                    <div className="col-6">
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
                                    <div className="col-6 d-flex align-items-end justify-content-end" >
                                        <button className="clickable std-btn" style={{ background: "var(--theme-color-1)", fontWeight: "bold" }}>
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
