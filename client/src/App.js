import "./css/base-styles.css";
import "./css/bootstrap-grid.min.css";

import TitleBar from "./Components/TitleBar";
import MainContent from "./Components/MainContent";
import NavBar from "./Components/NavBar";
import LoginPage from "./Components/LoginPage";
import { useSelector } from "react-redux";
import React from "react";

function App() {
  let displayApp = useSelector(state => state.login.displayApp);

  return (
    <div className="App full-height">
      <header className="App-header full-height">
        <LoginPage />
        {displayApp ?
          <React.Fragment>
            <TitleBar />
            <MainContent />
            <NavBar />
          </React.Fragment>
          : ""}
      </header>
    </div>
  );
}


export default App;
