import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

function PersonalCard(props) {
    let { infoObj } = props;
    let personalCardCSS = {}
    let [status, setStatus] = useState("ACTIVE");

    let totalCount = infoObj.leftCount + infoObj.rightCount;
    let rightPercent = 100 * infoObj.rightCount / totalCount;
    let leftPercent = 100 * infoObj.leftCount / totalCount;

    const handleDelete = () => {
        console.log(`Delete ${infoObj.type} #${infoObj.postIndex}`);
        // fetch("/api/delete")
        //     .then(res => res.json())
        //     .then(data => setStatus(data["status"]), error => console.log(error));
    }

    return (
        <div className="personal-card row" style={personalCardCSS}>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 personal-card-title">
                        {`${infoObj.type} #${infoObj.postIndex}`}
                        <FontAwesomeIcon className="clickable" icon={faTrash} onClick={handleDelete} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {infoObj.body}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="personal-card-count" >
                            {`${totalCount} entries`}
                        </div>
                        <div className="personal-card-percent-bar" >
                            <div className="percent-bar" style={{ width: `${leftPercent}%`, minWidth: `${leftPercent}%`, backgroundColor: "var(--theme-color-1)", borderRight: `${leftPercent > 0 ? "2px solid white" : ""}` }} />
                            <div className="percent-bar" style={{ width: `${rightPercent}%`, minWidth: `${rightPercent}%`, backgroundColor: "var(--theme-color-2)", borderLeft: `${rightPercent > 0 ? "2px solid white" : ""}` }} />
                        </div>
                        <div className="d-flex justify-content-between" >
                            <div>
                                {`${Math.round(leftPercent)}%`}
                            </div>
                            <div>
                                {`${Math.round(rightPercent)}%`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalCard;
