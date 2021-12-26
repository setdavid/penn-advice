import React from "react";
import { useSelector } from "react-redux";

export let TITLE_BAR_HEIGHT = 80;

function TitleBar() {
  let percentRight = useSelector(state => state.swipe.percentRight);
  let percentLeft = (1 - percentRight) * 100;
  percentRight *= 100;

  let titleBarCSS = {
    height: `${TITLE_BAR_HEIGHT}px`,
    backgroundColor: "white"
  }

  return (
    <div id="title-bar" className="container-fluid" style={titleBarCSS}>
      <div className="row d-flex" style={{ height: "60%", minHeight: "60%", paddingLeft: "5px" }}>
        <div className="col-12" style={{ fontSize: "2.5rem" }}>
          PennAdvice
        </div>
      </div>
      <div className="row d-flex" style={{ height: "30%", minHeight: "30%", paddingLeft: "12px" }}>
        <div className="col-12" style={{ fontSize: "0.75rem" }}>
          by Penn Spark Gray
        </div>
      </div>
      <div className="row" style={{ height: "10%", minHeight: "10%" }}>
        <div style={{ width: `${percentLeft}%`, minWidth: `${percentLeft}%`, backgroundColor: "#990000" }} />
        <div style={{ width: `${percentRight}%`, minWidth: `${percentRight}%`, backgroundColor: "#011F5b" }} />
      </div>
    </div>
  );
}

export default TitleBar;
