import React from "react";
import { useSelector } from "react-redux";
import PersonalContent from "./PersonalContent";
import { SIDE_BAR_WIDTH } from "./SideBar";
import SwipeContent from "./SwipeContent";

function Desktop() {
  let modeIsMobile = useSelector(state => state.mode.modeIsMobile);

  let desktopCSS = {
    width: `calc(100vw - ${modeIsMobile ? 0 : SIDE_BAR_WIDTH}px)`
  }

  return (
    <div id="desktop-content" className="row full-height" style={desktopCSS}>
      <div className="col-lg-4 full-height">
        <PersonalContent />
      </div>
      <div className="col-lg-8 full-height">
        <SwipeContent />
      </div>
    </div>
  );
}

export default Desktop;
