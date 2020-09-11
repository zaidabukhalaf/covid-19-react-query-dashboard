import React from "react";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const fetchDataCorona = async (key) => {
    const { data } = await axios.get("https://disease.sh/v3/covid-19/" + key);
    return data;
  };
  const { data, isLoading, isError } = useQuery(
    "covid",
    fetchDataCorona("all")
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
