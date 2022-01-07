import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

function PersonalCard(props) {
    let { infoObj } = props;
    let personalCardCSS = {}
    let [status, setStatus] = useState("ACTIVE");

    let percentRight = 100 * infoObj.percentRight;
    let percentLeft = 100 * (1 - infoObj.percentRight);

    const handleDelete = () => {
        console.log(`Delete ${infoObj.type} #${infoObj.index}`);
        // fetch("/api/delete")
        //     .then(res => res.json())
        //     .then(data => setStatus(data["status"]), error => console.log(error));
    }

    return (
        <div className="personal-card row" style={personalCardCSS}>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 personal-card-title">
                        {`${infoObj.type} #${infoObj.index}`}
                        {/* {`${infoObj.type} #${infoObj.index} (${status})`} */}
                        <FontAwesomeIcon className="clickable" icon={faTrash} onClick={handleDelete} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {infoObj.text}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="personal-card-count" >
                            {`${infoObj.count} entries`}
                        </div>
                        <div className="personal-card-percent-bar" >
                            <div className="percent-bar" style={{ width: `${percentLeft}%`, minWidth: `${percentLeft}%`, backgroundColor: "var(--theme-color-1)", borderRight: `${percentLeft > 0 ? "2px solid white" : ""}` }} />
                            <div className="percent-bar" style={{ width: `${percentRight}%`, minWidth: `${percentRight}%`, backgroundColor: "var(--theme-color-2)", borderLeft: `${percentRight > 0 ? "2px solid white" : ""}` }} />
                        </div>
                        <div className="d-flex justify-content-between" >
                            <div>
                                {`${Math.round(percentLeft)}%`}
                            </div>
                            <div>
                                {`${Math.round(percentRight)}%`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalCard;
