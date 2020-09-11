import React from "react";
import "./App.css";
import { useQuery } from "react-query";
import { fetchDataCorona } from "./queries";
import Header from "./components/header";

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
        <div className="dashboard">
          <div className="info-box">
            <p>36279837892798237</p>
            <p>cases</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
