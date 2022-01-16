import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCards } from "../js/utils";
import { setUserIsFetching } from "../redux/ducks/user";

function PersonalCard(props) {
    let { infoObj } = props;
    let personalCardCSS = {}
    let [loading, setLoading] = useState(false);
    let userData = useSelector(state => state.user.userData);
    let userIsFetching = useSelector(state => state.user.userIsFetching);
    let dispatch = useDispatch();

    let totalCount = infoObj.leftCount + infoObj.rightCount;
    let rightPercent = 100 * infoObj.rightCount / totalCount;
    let leftPercent = 100 * infoObj.leftCount / totalCount;

    if (totalCount === 0) {
        rightPercent = 50;
        leftPercent = 50;
    }

    const handleDelete = async () => {
        if (userIsFetching) return
        dispatch(setUserIsFetching(true));
        setLoading(true);

        const body = {
            postIndex: infoObj.postIndex,
            username: userData.username
        }

        await fetch(`/posts`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(async data => {
                if (data.success) {
                    await fetch(`/user/posts?username=${userData.username}`)
                        .then(res => res.json())
                        .then(async data => {
                            if (data.success) {
                                await getUserCards(data.data).catch(rej => {
                                    console.log(rej.msg);
                                });
                            } else {
                                if (typeof data.msg == "string") {
                                    console.log(data.msg);
                                } else {
                                    console.log("SERVER ERROR");
                                }
                            }
                        }, (err) => {
                            console.log("SERVER ERROR");
                        });
                } else {
                    if (typeof data.msg == "string") {
                        console.log(data.msg);
                    } else {
                        console.log("SERVER ERROR");
                    }
                }
            }, (err) => {
                console.log("SERVER ERROR");
            });

        dispatch(setUserIsFetching(false));
        setLoading(false);
    }

    return (
        <div className="personal-card row" style={personalCardCSS}>
            <div className="col-12">
                <div className="row" style={{ marginBottom: "0.5rem" }}>
                    <div className="col-12 personal-card-title">
                        <h5>
                            {`${infoObj.type} #${infoObj.postIndex}`}
                        </h5>
                        <FontAwesomeIcon className="clickable" icon={faTrash} onClick={handleDelete} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>
                            {infoObj.body}
                        </p>
                    </div>
                </div>
                {loading ? <div className="row">
                    <div className="col-12 loading-wrapper">
                        <div className="loading" />
                    </div>
                </div> : ""}
                <div className="row">
                    <div className="col-12">
                        <div className="personal-card-count" >
                            {`${totalCount} views`}
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
