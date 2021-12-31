import React from "react";
import { useSelector } from "react-redux";
import { ACCOUNT_CONTENT, PERSONAL_CONTENT } from "../redux/ducks/desktop";
import AccountContent from "./AccountContent";
import PersonalContent from "./PersonalContent";
import { DESKTOP_DISPLAY_TRANSITION_DURATION, SIDE_BAR_WIDTH } from "./SideBar";
import SwipeContent from "./SwipeContent";

function Desktop() {
  let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
  let display = useSelector(state => state.desktop.display);

  let desktopCSS = {
    width: `calc(100vw - ${modeIsMobile ? 0 : SIDE_BAR_WIDTH}px)`
  }

  let displaysCSS = {
    transitionDuration: `${DESKTOP_DISPLAY_TRANSITION_DURATION}ms`
  }

  let displayValues = {};

  switch (display) {
    case ACCOUNT_CONTENT:
      displayValues = {
        accountContent: 0,
        personalContent: 100
      };
      break;
    case PERSONAL_CONTENT:
      displayValues = {
        accountContent: -100,
        personalContent: 0
      };
      break;
    default:
      displayValues = {
        accountContent: -100,
        personalContent: 0
      };
  }

  return (
    <div id="desktop-content" className="row full-height" style={desktopCSS}>
      <div className="col-lg-4 full-height" style={{ paddingLeft: 0 }}>
        <AccountContent style={{ ...displaysCSS, top: `${displayValues.accountContent}%` }} />
        <PersonalContent style={{ ...displaysCSS, top: `${displayValues.personalContent}%` }} />
      </div>
      <div className="col-lg-8 full-height">
        <SwipeContent />
      </div>
    </div>
  );
}

export default Desktop;
