import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import "./styles/style.css";
import "./App.css";
import MainPageDisplay from "./components/MainPageDisplay";
import MySidebar from "./components/MySidebar";
import Playbar from "./components/Playbar";

function App() {
  return (
    <div className="App">
      <MySidebar />
      <MainPageDisplay />
      <Playbar />
    </div>
  );
}

export default App;
