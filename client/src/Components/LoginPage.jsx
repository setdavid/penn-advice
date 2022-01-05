import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_TRANSITION_DURATION, LOGIN_DISPLAY_TRANSITION_DURATION } from "../js/constants";
import { setLoggedIn } from "../redux/ducks/login";

const LOGIN_USER = "LOGIN_USER";
const CREATE_USER = "CREATE_USER";

function LoginPage() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [note, setNote] = useState("");
    let [displayPage, setDisplayPage] = useState(true);
    let [signedIn, setSignedIn] = useState(false);
    let [display, setDisplay] = useState(LOGIN_USER);

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

    const clearFields = () => {
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setNote("");
    }

    const handleLogin = (e) => {
        e.preventDefault();

        fetch(`/user?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    clearFields();
                    dispatch(setLoggedIn(true));
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

        // dispatch(setLoggedIn(true));
    }

    const handleCreateUser = (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setNote("passwords don't match");
        } else if (password.length < 5) {
            setNote("passwords must be at least 5 characters");
        } else {
            const body = {
                username,
                password
            }

            fetch(`/user`, {
                method: "POST",
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
                        setDisplay(LOGIN_USER);
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

        // dispatch(setLoggedIn(true));
    }

    const displaysCSS = {
        transitionDuration: `${LOGIN_DISPLAY_TRANSITION_DURATION}ms`
    }

    let displayValue = 0;

    switch (display) {
        case LOGIN_USER:
            displayValue = 0;
            break;
        case CREATE_USER:
            displayValue = -100;

            break;
        default:
            displayValue = 0;
    }

    const toggleCreateUser = () => {
        clearFields();
        setDisplay(CREATE_USER);
    }

    const toggleLoginUser = () => {
        clearFields();
        setDisplay(LOGIN_USER);
    }

    return (
        <div id="login-page" className="container-fluid full-height" style={loginPageContentCSS}>
            <div className="row full-height" style={{ opacity: `${signedIn ? 0 : 1}`, transitionDuration: `${signedIn ? LOGIN_TRANSITION_DURATION / 4 : 3 * LOGIN_TRANSITION_DURATION}ms` }}>
                <div className="col-12 full-height d-flex flex-column justify-content-center align-items-center" >
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
                    <div className="row" style={{ width: "100%", position: "relative", flexWrap: "nowrap", alignItems: "start" }}>
                        <div className="col-12 login-display" style={{ ...displaysCSS, left: `${displayValue}vw` }}>
                            <form onSubmit={handleLogin} >
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
                                <div className="row d-flex" style={{ marginBottom: "2rem" }} >
                                    {/* <div className="col-12 d-flex justify-content-center">
                                        <input className="clickable" type="submit" value="Log in" disabled={`${signedIn ? "disabled" : ""}`} />
                                    </div> */}
                                    <div className="col-12 d-flex justify-content-center align-items-center">
                                        <button className="clickable login-btn login-submit-btn" disabled={`${signedIn ? "disabled" : ""}`}>
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="row d-flex">
                                <div className="col-12 clickable login-btn" onClick={toggleCreateUser}>
                                    <div>
                                        Create New User
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 login-display" style={{ ...displaysCSS, left: `${displayValue}vw` }}>
                            <form onSubmit={handleCreateUser} >
                                <div className="row" style={{ marginBottom: "1rem" }} >
                                    <div className="col-12">
                                        <label> Set Username
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
                                        <label> Set Password
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
                                <div className="row" style={{ marginBottom: "1rem" }}>
                                    <div className="col-12">
                                        <label> Confirm Password
                                            <br />
                                            <input
                                                type="text"
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                onChange={e => setConfirmPassword(e.target.value)}
                                                disabled={`${signedIn ? "disabled" : ""}`}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="row d-flex" style={{ marginBottom: "2rem" }} >
                                    <div className="col-12 d-flex justify-content-center align-items-center">
                                        <button className="clickable login-btn login-submit-btn" disabled={`${signedIn ? "disabled" : ""}`}>
                                            Create New User
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="row d-flex">
                                <div className="col-12 clickable login-btn" onClick={toggleLoginUser}>
                                    <div>
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default LoginPage;
