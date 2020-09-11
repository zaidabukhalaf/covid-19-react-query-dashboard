import React from "react";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const fetchDataCorona = async () => {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return data;
  };
  const { data, isLoading, isError } = useQuery("covid", fetchDataCorona);

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
