import React from "react";
import PersonalCard from "./PersonalCard";

import { TEST_ARR } from "../js/constants";

function PersonalContent(props) {
    let { style } = props;
    let personalContentCSS = {}

    return (
        <div id="personal-content" className="full-height" style={{ ...style, ...personalContentCSS }}>
            <div id="personal-content-header">
                Personal Content
            </div>
            <PersonalCard infoObj={TEST_ARR[0]} />
            <PersonalCard infoObj={TEST_ARR[1]} />
            <PersonalCard infoObj={TEST_ARR[2]} />
            <PersonalCard infoObj={TEST_ARR[3]} />
        </div>
    );
}

export default PersonalContent;
