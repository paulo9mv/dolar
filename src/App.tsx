import React from "react";

import "./App.css";
import { MainPage } from "./components/MainPage";
import TopBar from "./components/Topbar";
import FooterMenu from "./components/FooterMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <MainPage />
        <FooterMenu />
      </header>
    </div>
  );
}

export default App;
