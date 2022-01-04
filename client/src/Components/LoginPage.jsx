import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_TRANSITION_DURATION } from "../js/constants";
import { setLoggedIn } from "../redux/ducks/login";

function LoginPage() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [note, setNote] = useState("");
    let [displayPage, setDisplayPage] = useState(true);
    let [signedIn, setSignedIn] = useState(false);

    let dispatch = useDispatch();
    let loggedIn = useSelector(state => state.login.loggedIn);

    let loginPageContentCSS = {
        transitionDuration: `${LOGIN_TRANSITION_DURATION}ms`,
        width: `${displayPage ? "100%" : "0"}`
    }

    if (signedIn) {
        loginPageContentCSS = {
            ...loginPageContentCSS,
            opacity: 0,
            transform: "scale(25)"
        }
    } else {
        loginPageContentCSS = {
            ...loginPageContentCSS,
            opacity: 1,
            transform: "scale(1)"
        }
    }

    useEffect(() => {
        if (loggedIn) {
            setSignedIn(true);

            window.setTimeout(() => {
                setDisplayPage(false);
            }, LOGIN_TRANSITION_DURATION);
        } else {
            setSignedIn(false);
            setDisplayPage(true);
        }
    }, [loggedIn]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/user?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setNote("");
                    dispatch(setLoggedIn(true));
                } else {
                    setNote(data.msg);
                }
            }, (err) => {
                setNote(err.msg);
            });

        // dispatch(setLoggedIn(true));
    }

    return (
        <div id="login-page" className="container-fluid full-height" style={loginPageContentCSS}>
            <div className="row full-height" style={{ opacity: `${signedIn ? 0 : 1}`, transitionDuration: `${signedIn ? LOGIN_TRANSITION_DURATION / 4 : 3 * LOGIN_TRANSITION_DURATION}ms` }}>
                <div className="col-12 full-height d-flex flex-column justify-content-center align-items-center">
                    <div className="row d-flex" style={{ marginBottom: "2rem" }}>
                        <div className="col-12" style={{ fontSize: "2.5rem", lineHeight: "1" }}>
                            <div>
                                PennHub
                            </div>
                            <div style={{ fontSize: "0.75rem" }}>
                                &nbsp; by Penn Spark Gray
                            </div>
                        </div>
                    </div>
                    {note == "" ? "" : <div className="row d-flex" style={{ marginBottom: "1rem", color: "red", fontSize: "0.75rem" }}>
                        <div className="col-12" >
                            <div>
                                {note}
                            </div>
                        </div>
                    </div>}
                    <form onSubmit={handleSubmit}>
                        <div className="row" style={{ marginBottom: "1rem" }} >
                            <div className="col-12">
                                <label> Username
                                    <br />
                                    <input
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        disabled={`${signedIn ? "disabled" : ""}`}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: "1rem" }}>
                            <div className="col-12">
                                <label> Password
                                    <br />
                                    <input
                                        type="text"
                                        name="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        disabled={`${signedIn ? "disabled" : ""}`}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: "1rem" }} >
                            <div className="col-12 d-flex justify-content-center">
                                <input className="clickable" type="submit" value="Log in" disabled={`${signedIn ? "disabled" : ""}`} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default LoginPage;
