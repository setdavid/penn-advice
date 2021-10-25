import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { NAV_BAR_HEIGHT } from "./NavBar";
import { TITLE_BAR_HEIGHT } from "./TitleBar";

function MainContent() {
  let dispatch = useDispatch();
  let modeIsMobile = useSelector(state => state.mode.modeIsMobile);

  let mainContentCSS = {
    height: `calc(100vh - ${TITLE_BAR_HEIGHT}px - ${modeIsMobile ? NAV_BAR_HEIGHT : 0}px)`,
    backgroundColor: "green"
  }

  return (
    <div id="main-content" className="container-fluid" style={mainContentCSS}>
      <div className="row full-height">
        <div className="col-12 full-height">
          {modeIsMobile ? <Mobile /> : <Desktop />}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
