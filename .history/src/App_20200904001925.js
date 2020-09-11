import React from "react";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const fetchDataCorona = async () => {
    const res = await axios.get("https://disease.sh/v3/covid-19/countries");
    return res.data;
  };
  const allData = useQuery("covid", fetchDataCorona);
  return (
    <div className="App">
      <p>Corona</p>
    </div>
  );
}

export default App;
