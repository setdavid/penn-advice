import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AccountContent(props) {
    let { style } = props;
    let accountContentCSS = {}

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
        </div >
    );
}

export default AccountContent;
