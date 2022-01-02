import "./css/base-styles.css";
import "./css/bootstrap-grid.min.css";

import TitleBar from "./Components/TitleBar";
import MainContent from "./Components/MainContent";
import NavBar from "./Components/NavBar";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
        <TitleBar />
        <MainContent />
        <NavBar />
      </header>
    </div>
  );
}


export default App;
