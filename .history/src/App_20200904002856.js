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
  const allData = useQuery("covid", fetchDataCorona);
  const [data, setData] = useState([allData.data]);
  return (
    <div className="App">
      <p>Corona</p>
      {console.log(allData)}
    </div>
  );
}

export default App;
