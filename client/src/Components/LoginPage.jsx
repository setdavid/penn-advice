import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { LOGIN_TRANSITION_DURATION, LOGIN_DISPLAY_TRANSITION_DURATION } from "../js/constants";
import { setDisplayApp, setLoggedIn } from "../redux/ducks/login";
import { setUserData } from "../redux/ducks/user";
import { getUserCards, updateConfigs } from "../js/utils";
import Logo from "./Logo";

const LOGIN_USER = "LOGIN_USER";
const CREATE_USER = "CREATE_USER";

function LoginPage() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [note, setNote] = useState("");
    let [loading, setLoading] = useState(false);
    let [displayPage, setDisplayPage] = useState(true);
    let [signedIn, setSignedIn] = useState(false);
    let [display, setDisplay] = useState(LOGIN_USER);

    let dispatch = useDispatch();
    let loggedIn = useSelector(state => state.login.loggedIn);

    let loginPageCSS = {
        transitionDuration: `${LOGIN_TRANSITION_DURATION}ms`,
        width: `${displayPage ? "100%" : "0"}`
    }

    if (signedIn) {
        loginPageCSS = {
            ...loginPageCSS,
            opacity: 0,
            transform: "scale(25)"
        }
    } else {
        loginPageCSS = {
            ...loginPageCSS,
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
        setLoading(false);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNote("");

        if (username === "" && password === "") {
            clearFields();
            updateConfigs();

            batch(() => {
                dispatch(setLoggedIn(true));
                dispatch(setDisplayApp(true));
                dispatch(setUserData({}));
            });
        } else {
            await fetch(`/user?username=${username}&password=${password}`)
                .then(res => res.json())
                .then(async data => {
                    if (data.success) {
                        await getUserCards(data.data.userPosts).then(res => {
                            clearFields();
                            updateConfigs();
                            batch(() => {
                                dispatch(setLoggedIn(true));
                                dispatch(setDisplayApp(true));
                                dispatch(setUserData(data.data));
                            });
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

        }

        setLoading(false);
    }

    const handleCreateUser = async (e) => {
        e.preventDefault();
        setLoading(true);
        setNote("");

        if (password != confirmPassword) {
            setNote("passwords don't match");
        } else if (password.length < 5) {
            setNote("passwords must be at least 5 characters");
        } else {
            const body = {
                username,
                password
            }

            await fetch(`/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
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

        setLoading(false);
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
        <div id="login-page" className="container-fluid full-height" style={loginPageCSS}>
            <div className="row full-height" style={{ opacity: `${signedIn ? 0 : 1}`, transitionDuration: `${signedIn ? LOGIN_TRANSITION_DURATION / 4 : 3 * LOGIN_TRANSITION_DURATION}ms` }}>
                <div className="col-12 full-height d-flex flex-column justify-content-center align-items-center" >
                    <div style={{ height: "2rem", minWidth: "200px" }}>
                        {note == "" ? "" : <div className="row d-flex" style={{ marginBottom: "1rem", color: "red", fontSize: "0.75rem", textAlign: "center" }}>
                            <div className="col-12" >
                                <div>
                                    {note}
                                </div>
                            </div>
                        </div>}
                        {loading ? <div className="row d-flex" >
                            <div className="col-12 loading-wrapper" >
                                <div className="loading" />
                            </div>
                        </div> : ""}
                    </div>
                    <div className="row d-flex" style={{ marginBottom: "2rem" }}>
                        <div className="col-12" style={{ fontSize: "2.5rem", lineHeight: "1" }}>
                            <Logo />
                        </div>
                    </div>
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
                                    <div className="col-12 d-flex justify-content-center align-items-center">
                                        <button className="std-btn" disabled={`${signedIn ? "disabled" : ""}`}>
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="row d-flex">
                                <div className="col-12">
                                    <button className="std-btn" onClick={toggleCreateUser} disabled={`${signedIn ? "disabled" : ""}`}>
                                        Create New User
                                    </button>
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
                                        <button className="std-btn" disabled={`${signedIn ? "disabled" : ""}`}>
                                            Create New User
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="row d-flex">
                                <div className="col-12" >
                                    <button className="std-btn" onClick={toggleLoginUser} disabled={`${signedIn ? "disabled" : ""}`}>
                                        Cancel
                                    </button>
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
