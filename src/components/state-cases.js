import React from "react";
import { useStatesData } from "../api/all-api";

const StateCases = () => {
  const { status, data, error, isFetching } = useStatesData();
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
    <div className="states-cases">
      <p className="text-white text-center header-title">Cases by Country</p>
      <div className="states-list">
        {data.map((d, i) => (
          <div key={i} className="state-status">
            <span className="text-red numbers">{d.cases}</span>
            <span className="text-white name">{d.country}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateCases;
