import "./css/base-styles.css";
import "./css/bootstrap-grid.min.css";

import TitleBar from "./Components/TitleBar";
import MainContent from "./Components/MainContent";
import NavBar from "./Components/NavBar";
import LoginPage from "./Components/LoginPage";
import { useSelector } from "react-redux";
import React from "react";
import { TITLE_BAR_HEIGHT, NAV_BAR_HEIGHT } from "./js/constants";

function App() {
  let displayApp = useSelector(state => state.login.displayApp);
  let modeIsMobile = useSelector(state => state.mode.modeIsMobile);

  return (
    <div className="App full-height">
      <header className="App-header full-height">
        <LoginPage />
        {displayApp ?
          <div id="app-content" style={{ gridTemplateRows: `${TITLE_BAR_HEIGHT}px 1fr ${modeIsMobile ? `${NAV_BAR_HEIGHT}px` : ""}` }}>
            <TitleBar />
            <MainContent />
            <NavBar />
          </div>
          : ""}
      </header>
    </div>
  );
}


export default App;
