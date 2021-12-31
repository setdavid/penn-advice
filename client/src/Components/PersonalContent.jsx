import React from "react";
import PersonalCard from "./PersonalCard";

function PersonalContent(props) {
    let { style } = props;
    let personalContentCSS = {}

    const testArr = [{ type: "Penn Life", index: 0, text: "test 0" },
    { type: "Penn Life", index: 1, text: "test 1" },
    { type: "Penn Life", index: 2, text: "test 2" }];

    return (
        <div id="personal-content" className="full-height" style={{ ...style, ...personalContentCSS }}>
            <div style={{ fontSize: "2rem", marginBottom: "15px" }}>
                Personal Content
            </div>
            <PersonalCard infoObj={testArr[0]} />
            <PersonalCard infoObj={testArr[1]} />
            <PersonalCard infoObj={testArr[2]} />
        </div>
    );
}

export default PersonalContent;
