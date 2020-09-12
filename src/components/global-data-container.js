import React from "react";
import { useGlobalData } from "../api/all-api";
import InfoBox from "./info-box";

const GlobalData = () => {
  const { status, data, error } = useGlobalData();
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

  return (
    <>
      <InfoBox text={data.cases} textWhite="cases" />
      <InfoBox text={data.active} textWhite="active" />
      <InfoBox text={data.recovered} textWhite="recovered" />
      <InfoBox text={data.deaths} textWhite="deaths" />
    </>
  );
};

export default GlobalData;
