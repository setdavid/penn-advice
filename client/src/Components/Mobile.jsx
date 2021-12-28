import React from "react";
import SwipeContent from "./SwipeContent";

function Mobile() {
  let mobileCSS = {
  }

  return (
    <div id="mobile-content" className="row full-height" style={mobileCSS}>
      <div className="col-12 full-height">
        <SwipeContent />
      </div>
    </div>
  );
}

export default Mobile;
