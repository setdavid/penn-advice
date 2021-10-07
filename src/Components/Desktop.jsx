import React from "react";
import PersonalContent from "./PersonalContent";
import SwipeContent from "./SwipeContent";

function Desktop() {
  let desktopCSS = {
  }

  return (
    <div id="desktop-content" className="row full-height" style={desktopCSS}>
      <div className="col-lg-8 full-height">
        <SwipeContent />
      </div>
      <div className="col-lg-4 full-height">
        <PersonalContent />
      </div>
    </div>
  );
}

export default Desktop;
