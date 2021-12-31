import React from "react";

function PersonalContent(props) {
    let { style } = props;
    let personalContentCSS = {}

    return (
        <div id="personal-content" className="full-height" style={{ ...style, ...personalContentCSS }}>
            Personal Content
        </div>
    );
}

export default PersonalContent;
