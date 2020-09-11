import React from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/info-box";
import { data, isError, isLoading } from "./api/all";

function App() {
  return (
    <div className="">
      <Header />
      <div>
        <div className="dashboard">
          <InfoBox textRed={data.cases} textWhite="cases " />
        </div>
      </div>
    </div>
  );
}

export default App;
