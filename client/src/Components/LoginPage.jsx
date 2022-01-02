import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../redux/ducks/login";

const LOGIN_ENTER_DURATION = 1000;

function LoginPage() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [note, setNote] = useState("");

    let dispatch = useDispatch();
    let loggedIn = useSelector(state => state.login.loggedIn);

    let loginPageContentCSS = {
        transitionDuration: `${LOGIN_ENTER_DURATION}ms`
    }

    if (loggedIn) {
        loginPageContentCSS = {
            ...loginPageContentCSS,
            top: "-100%",
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
        fetch(`/api/login?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                if (data.status == 0) {
                    dispatch(setLoggedIn(true));
                } else {
                    setNote(data.note);
                }
            });
    }

    return (
        <div id="login-page" className="container-fluid full-height" style={loginPageContentCSS}>
            <div className="row full-height">
                <div className="col-12 full-height d-flex flex-column justify-content-center align-items-center">
                    <div className="row d-flex" style={{ marginBottom: "2rem" }}>
                        <div className="col-12" style={{ fontSize: "2.5rem", lineHeight: "1" }}>
                            <div>
                                PennAdvice
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
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: "1rem" }} >
                            <div className="col-12 d-flex justify-content-center">
                                <input className="clickable" type="submit" value="Log in" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default LoginPage;
