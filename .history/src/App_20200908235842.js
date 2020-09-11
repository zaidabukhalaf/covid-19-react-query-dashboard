import React from "react";
import "./App.css";
import { useQuery } from "react-query";
import { fetchDataCorona } from "./queries";

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
      <h1>Corona</h1>
      {console.log(data)}
    </div>
  );
}

export default App;
