import React from "react";
import "./App.css";
import { useQuery } from "react-query";
import { fetchDataCorona } from "./queries";
import Header from "./components/header";
import InfoBox from "./components/info-box";
import AllData from "./api/useAll";
function App() {
  const { data, isLoading, isError, isFetching } = AllData();
  return (
    <div className="">
      <Header />
      <div>
        <div className="dashboard">
          {/* <InfoBox textRed={data.cases} textWhite="cases " /> */}
          {console.log(AllData())}
        </div>
      </div>
    </div>
  );
}

export default App;
