import { faDoorOpen, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { setLoggedOut } from "../redux/ducks/login";

function AccountContent(props) {
    let { style } = props;
    let accountContentCSS = {}

    let dispatch = useDispatch();

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
        </div >
    );
}

export default AccountContent;
