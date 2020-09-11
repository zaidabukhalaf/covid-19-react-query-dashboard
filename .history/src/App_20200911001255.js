import React from "react";
import "./App.css";
import { useQuery } from "react-query";
import { fetchDataCorona } from "./queries";
import Header from "./components/header";
import InfoBox from "./components/info-box";
import { data, isError, isLoading } from "./api/all";

function App() {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching Data </p>;
  }
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
