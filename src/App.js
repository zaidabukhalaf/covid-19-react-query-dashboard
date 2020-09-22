import React from "react";
import "./App.css";
import Details from "./components/details";

import GlobalData from "./components/global-data-container";
import Header from "./components/header";

function App() {
  return (
    <div className="dashboard">
      <Header />
      <div className="container">
        <div className="global-data">
          <GlobalData />
        </div>
        <Details />
      </div>
    </div>
  );
}

export default App;
