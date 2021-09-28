import "./css/base-styles.css";
import "./css/bootstrap-grid.min.css";

import TitleBar from "./Components/TitleBar";
import MainContent from "./Components/MainContent";
import NavBar from "./Components/NavBar";
import { initializeEventListeners } from "./js/utils";

function App() {
  initializeEventListeners();

  return (
    <div className="App">
      <header className="App-header">
        <TitleBar />
        <MainContent />
        <NavBar />
      </header>
    </div>
  );
}

export default App;
