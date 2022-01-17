import React from "react";
import { useSelector } from "react-redux";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import SideBar from "./SideBar";
import { SIDE_BAR_WIDTH } from "../js/constants";

function MainContent() {
  let modeIsMobile = useSelector(state => state.mode.modeIsMobile);

  let mainContentCSS = {
  }

  let desktopCSS = {
    display: "grid",
    gridTemplateColumns: `${SIDE_BAR_WIDTH}px 1fr`
  }

  return (
    <div id="main-content" className="container-fluid" style={mainContentCSS}>
      <div className="row full-height">
        {modeIsMobile ?
          <div className="col-12 full-height">
            <Mobile />
          </div> :
          <div className="col-12 full-height" style={desktopCSS}>
            <SideBar />
            <Desktop />
          </div>
        }
      </div>
    </div>
  );
}

export default MainContent;
