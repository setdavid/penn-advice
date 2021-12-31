import React from "react";

function AccountContent(props) {
    let { style } = props;
    let accountContentCSS = {}

    return (
        <div id="account-content" className="full-height" style={{ ...style, ...accountContentCSS }}>
            Account Content
        </div >
    );
}

export default AccountContent;
