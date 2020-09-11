import React from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/info-box";
import { data } from "./api/all";
import useStore from "./store";

function App() {
  const all = useStore((state) => state.all);
  return (
    <div className="">
      <Header />
      <div>
        <div className="dashboard">
          {/* <InfoBox textRed={data.cases} textWhite="cases " /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
