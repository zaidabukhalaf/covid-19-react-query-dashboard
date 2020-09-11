import React, { useState } from "react";
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
      <p>Corona</p>
      {console.log(data)}
      {data.map((d, i) => (
        <div key={i}>
          <span>{d.country}</span>
          <span>{d.active}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
