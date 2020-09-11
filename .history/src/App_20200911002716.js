import React from "react";
import "./App.css";
import Header from "./components/header";
import InfoBox from "./components/info-box";
import { data } from "./api/all";
import useStore from "./store";

function App() {
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (isError) {
  //   return <p>Error fetching Data </p>;
  // }

  const state = useStore();
  const all = useStore((state) => state.all);
  return (
    <div className="">
      <Header />
      <div>
        <div className="dashboard">
          {console.log(state)}
          {/* <InfoBox textRed={data.cases} textWhite="cases " /> */}
        </div>
      </div>
    </div>
  );
}

export default App;