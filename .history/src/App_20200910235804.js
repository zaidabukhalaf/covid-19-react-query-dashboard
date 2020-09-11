import React from "react";
import "./App.css";
import { useQuery } from "react-query";
import { fetchDataCorona } from "./queries";
import Header from "./components/header";
import InfoBox from "./components/info-box";

function App() {
  const { data, isLoading, isError } = useQuery(
    ["global", "all"],
    fetchDataCorona
  );

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
        {console.log(data)}
        <div className="dashboard">
          <InfoBox textRed="22934948" textWhite="cases " />
        </div>
      </div>
    </div>
  );
}

export default App;
