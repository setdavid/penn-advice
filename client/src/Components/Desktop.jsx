import React from "react";
import { useSelector } from "react-redux";
import { ACCOUNT_CONTENT, PERSONAL_CONTENT } from "../redux/ducks/desktop";
import AccountContent from "./AccountContent";
import PersonalContent from "./PersonalContent";
import { DESKTOP_DISPLAY_TRANSITION_DURATION } from "../js/constants";
import SwipeContent from "./SwipeContent";

function Desktop() {
  let modeIsMobile = useSelector(state => state.mode.modeIsMobile);
  let display = useSelector(state => state.desktop.display);

  let desktopCSS = {
  }

  let displaysCSS = {
    transitionDuration: `${DESKTOP_DISPLAY_TRANSITION_DURATION}ms`
  }

  let displayValues = {};

  switch (display) {
    case ACCOUNT_CONTENT:
      displayValues = {
        accountContent: 0,
        personalContent: 0
      };
      break;
    case PERSONAL_CONTENT:
      displayValues = {
        accountContent: -100,
        personalContent: -100
      };
      break;
    default:
      displayValues = {
        accountContent: -100,
        personalContent: -100
      };
  }

  return (
    <div id="desktop-content" className="row full-height" style={desktopCSS}>
      <div className="col-lg-4 full-height">
        <div className="row full-height" style={{ ...displaysCSS, top: `${displayValues.accountContent}%` }} >
          <AccountContent />
        </div>
        <div className="row full-height" style={{ ...displaysCSS, top: `${displayValues.personalContent}%` }} >
          <PersonalContent />
        </div>
      </div>
      <div className="col-lg-8 full-height">
        <SwipeContent />
      </div>
    </div>
  );
}

export default Desktop;
