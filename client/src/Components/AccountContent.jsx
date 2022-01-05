import { faDoorOpen, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SWITCH_SIZE } from "../js/constants";
import { setLoggedOut } from "../redux/ducks/login";
import { setGhostMode } from "../redux/ducks/mode";

function AccountContent(props) {
    let { style } = props;
    let accountContentCSS = {}

    let dispatch = useDispatch();
    let ghostMode = useSelector(state => state.mode.ghostMode);

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
                <div className="col-12 d-flex justify-content-center" style={{ marginTop: "10px", fontWeight: "bold" }}>
                    <div onClick={() => dispatch(setLoggedOut())} className="clickable">
                        Log out &nbsp;<FontAwesomeIcon icon={faDoorOpen} size="lg" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="preferences" className="col-12" style={{ marginTop: "50px" }}>
                    <div className="row" style={{ fontWeight: "bold" }}>
                        <div className="col-12">
                            <div style={{ border: "none" }}>
                                Preferences
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <span style={{ maxWidth: "50%" }}>
                                    Show Ghost Card After Swipe
                                </span>
                                <span id="ghost-mode-switch" className="d-flex clickable" style={{ height: `${SWITCH_SIZE}px` }}
                                    onClick={() => {
                                        if (ghostMode) {
                                            dispatch(setGhostMode(false));
                                        } else {
                                            dispatch(setGhostMode(true));
                                        }
                                    }}>
                                    <div id="ghost-mode-switch-dot" style={{
                                        width: `${SWITCH_SIZE}px`,
                                        height: `${SWITCH_SIZE}px`,
                                        left: `${ghostMode ? `calc(100% - ${SWITCH_SIZE}px)` : "0"}`,
                                    }}>

                                    </div>
                                    <div className="switch-comp" style={{ width: `${ghostMode ? 100 : 0}%`, minWidth: `${ghostMode ? 100 : 0}%`, backgroundColor: "var(--theme-color-1)" }} />
                                    <div className="switch-comp" style={{ width: `${ghostMode ? 0 : 100}%`, minWidth: `${ghostMode ? 0 : 100}%`, backgroundColor: "var(--theme-color-4)" }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AccountContent;
