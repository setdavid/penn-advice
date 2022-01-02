import React from "react";
import { useSelector } from "react-redux";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import SideBar from "./SideBar";
import { NAV_BAR_HEIGHT, SIDE_BAR_WIDTH, TITLE_BAR_HEIGHT } from "../js/constants";

function MainContent() {
  let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
  let windowHeight = useSelector(state => state.windowConfig.windowHeight);

  let mainContentCSS = {
    height: `calc(${windowHeight}px - ${TITLE_BAR_HEIGHT}px - ${modeIsMobile ? NAV_BAR_HEIGHT : 0}px)`,
  }

  return (
    <div id="main-content" className="container-fluid" style={mainContentCSS}>
      <div className="row full-height">
        {modeIsMobile ?
          <div className="col-12 full-height">
            <Mobile />
          </div> :
          <div className="col-12 full-height d-flex">
            <SideBar />
            <Desktop />
          </div>
        }
      </div>
    </div>
  );
}

export default MainContent;
