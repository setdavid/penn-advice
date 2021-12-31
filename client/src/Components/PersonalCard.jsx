import React from "react";

function PersonalCard(props) {
    let { infoObj } = props;
    let personalCardCSS = {}

    return (
        <div className="personal-card" style={personalCardCSS}>
            <div className="personal-card-title">
                {infoObj.type}
            </div>
            <div>
                {infoObj.text}
            </div>
        </div>
    );
}

export default PersonalCard;
