import React from "react";
import { useSelector } from "react-redux";

export let TITLE_BAR_HEIGHT = 80;

function TitleBar() {
  let percentRight = useSelector(state => state.swipe.percentRight);
  let percentLeft = (1 - percentRight) * 100;
  percentRight *= 100;

  let titleBarCSS = {
    height: `${TITLE_BAR_HEIGHT}px`
  }

  return (
    <div id="title-bar" className="container-fluid" style={titleBarCSS}>
      <div className="row d-flex" style={{ height: "90%", minHeight: "90%", paddingTop: "7px" }}>
        <div className="col-12" style={{ fontSize: "2.5rem", lineHeight: "1" }}>
          <div>
            PennAdvice
          </div>
          <div style={{ fontSize: "0.75rem" }}>
            &nbsp; by Penn Spark Gray
          </div>
        </div>
      </div>
      <div className="row" style={{ height: "10%", minHeight: "10%" }}>
        <div className="percent-bar" style={{ width: `${percentLeft}%`, minWidth: `${percentLeft}%`, backgroundColor: "#990000", borderRight: `${percentLeft > 0 ? "1px solid white" : ""}` }} />
        <div className="percent-bar" style={{ width: `${percentRight}%`, minWidth: `${percentRight}%`, backgroundColor: "#011F5b", borderLeft: `${percentRight > 0 ? "1px solid white" : ""}` }} />
      </div>
    </div>
  );
}

export default TitleBar;
