import React from "react";

import "./App.css";
import { MainPage } from "./screens/mainPage/MainPage";
import { Error } from "./screens/error/Error";
import TopBar from "./components/topbar/Topbar";
import FooterMenu from "./components/footer/FooterMenu";
import { useSelector } from "react-redux";
import { selectStatus } from "./store/reducer";

function App() {

  const status = useSelector(selectStatus)

  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        {!status.hasError ? <MainPage /> : <Error />}
        <FooterMenu />
      </header>
    </div>
  );
}

export default App;
