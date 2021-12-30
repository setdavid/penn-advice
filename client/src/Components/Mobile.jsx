import React from "react";
import { useSelector } from "react-redux";
import SwipeContent from "./SwipeContent";
import PersonalContent from "./PersonalContent";
import { PERSONAL_CONTENT, SWIPE_CONTENT } from "../redux/ducks/mobile";
import { MOBILE_DISPLAY_TRANSITION_DURATION } from "./NavBar";

function Mobile() {
  let display = useSelector(state => state.mobile.display);

  let mobileCSS = {
  }

  let displaysCSS = {
    transitionDuration: `${MOBILE_DISPLAY_TRANSITION_DURATION}ms`
  }

  let displayValues = {};

  switch (display) {
    case SWIPE_CONTENT:
      displayValues = {
        swipeContent: 0,
        personalContent: 100
      };
      break;
    case PERSONAL_CONTENT:
      displayValues = {
        swipeContent: -100,
        personalContent: 0
      };
      break;
    default:
      displayValues = {
        swipeContent: 0,
        personalContent: 100
      };
  }

  return (
    <div id="mobile-content" className="row full-height" style={mobileCSS}>
      <div className="col-12 full-height" style={{ ...displaysCSS, left: `${displayValues.swipeContent}%` }}>
        <SwipeContent />
      </div>
      <div className="col-12 full-height" style={{ ...displaysCSS, left: `${displayValues.personalContent}%` }}>
        <PersonalContent />
      </div>
    </div>
  );
}

export default Mobile;
