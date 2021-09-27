import React from "react";

export let TITLE_BAR_HEIGHT = 80;

function TitleBar() {
  let titleBarCSS = {
    height: `${TITLE_BAR_HEIGHT}px`, 
    backgroundColor: "blue"
  }

  return (
    <div id="title-bar" style={titleBarCSS}>
        Penn Spark Gray
    </div>
  );
}

export default TitleBar;
