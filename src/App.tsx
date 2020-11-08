import React from "react";

import "./App.css";
import { MainPage } from "./screens/mainPage/MainPage";
import TopBar from "./components/topbar/Topbar";
import FooterMenu from "./components/footer/FooterMenu";

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
