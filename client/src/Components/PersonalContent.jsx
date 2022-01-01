import React from "react";
import PersonalCard from "./PersonalCard";

import { testArr } from "./SwipeContent";

function PersonalContent(props) {
    let { style } = props;
    let personalContentCSS = {}

    return (
        <div id="personal-content" className="full-height" style={{ ...style, ...personalContentCSS }}>
            <div id="personal-content-header">
                Personal Content
            </div>
            <PersonalCard infoObj={testArr[0]} />
            <PersonalCard infoObj={testArr[1]} />
            <PersonalCard infoObj={testArr[2]} />
            <PersonalCard infoObj={testArr[3]} />
        </div>
    );
}

export default PersonalContent;
