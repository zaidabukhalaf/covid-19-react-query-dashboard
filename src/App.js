import React from "react";
import "./App.css";
import GlobalData from "./components/global-data-container";
import Header from "./components/header";
import StateCases from "./components/state-cases";

function App() {
  return (
    <div className="dashboard">
      <Header />
      <div className="container">
        <div className="global-data">
          <GlobalData />
        </div>
        <div className="details">
          <StateCases />
        </div>
      </div>
    </div>
  );
}

export default App;
