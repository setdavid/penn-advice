import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PersonalCard(props) {
    let { infoObj } = props;
    let personalCardCSS = {}

    let percentRight = 100 * infoObj.percentRight;
    let percentLeft = 100 * (1 - infoObj.percentRight);

    const handleDelete = () => {
        console.log(`Delete ${infoObj.type} #${infoObj.index}`);
    }

    return (
        <div className="personal-card" style={personalCardCSS}>
            <div className="personal-card-title">
                {`${infoObj.type} #${infoObj.index}`}
                <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
            </div>
            <div>
                {infoObj.text}
            </div>
            <div className="personal-card-count" >
                {`${infoObj.count} entries`}
            </div>
            <div className="personal-card-percent-bar" >
                <div className="percent-bar" style={{ width: `${percentLeft}%`, minWidth: `${percentLeft}%`, backgroundColor: "#990000", borderRight: `${percentLeft > 0 ? "2px solid white" : ""}` }} />
                <div className="percent-bar" style={{ width: `${percentRight}%`, minWidth: `${percentRight}%`, backgroundColor: "#011F5b", borderLeft: `${percentRight > 0 ? "2px solid white" : ""}` }} />
            </div>
            <div className="d-flex justify-content-between" >
                <div>
                    {`${percentLeft}%`}
                </div>
                <div>
                    {`${percentRight}%`}
                </div>
            </div>
        </div>
    );
}

export default PersonalCard;
