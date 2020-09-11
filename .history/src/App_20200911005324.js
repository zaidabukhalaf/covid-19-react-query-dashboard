import React from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/info-box";
import useAll from "./api/useAll";

function App() {
  const { status, data, error, isFetching } = useAll();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return (
      <p>
        <span>Error: {error.message}</span>
      </p>
    );
  }
  if (isFetching) {
    console.log("fetching");
    console.log(data);
  }
  return (
    <div className="">
      <Header />
      <div>
        <div className="dashboard">
          <InfoBox textRed={data.cases} textWhite="cases " />
        </div>
      </div>
    </div>
  );
}

export default App;
