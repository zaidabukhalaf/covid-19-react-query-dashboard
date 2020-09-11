import React from "react";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const fetchDataCorona = async () => {
    const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
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
          <span>
            <b>Country: </b>
            {d.country}
          </span>
          <br />
          <span>
            <b>Active: </b>
            {d.active}
          </span>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
