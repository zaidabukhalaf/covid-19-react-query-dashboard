import React from "react";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const fetchDataCorona = async () => {
    const res = await axios.get();
  };
  const allData = useQuery("covid", fetchDataCorona);
  return (
    <div className="App">
      <p>Corona</p>
    </div>
  );
}

export default App;
