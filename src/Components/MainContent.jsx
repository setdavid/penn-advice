import React from "react";
import { NAV_BAR_HEIGHT } from "./NavBar";
import { TITLE_BAR_HEIGHT } from "./TitleBar";

function MainContent() {
  let mainContentCSS = {
    height: `calc(100vh - ${TITLE_BAR_HEIGHT}px - ${NAV_BAR_HEIGHT}px)`, 
    backgroundColor: "green"
  }

  return (
    <div id="main-content" style={mainContentCSS}> 
        MainContent
    </div>
  );
}

export default MainContent;
