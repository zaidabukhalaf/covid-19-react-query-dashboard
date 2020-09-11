import React from "react";
import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";
import useStore from "../store";

const AllStatus = (props) => {
  const state = useStore();
  const { data, isLoading, isError } = useQuery(
    ["global", "all"],
    fetchDataCorona
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching Data </p>;
  }
  state.all = data;
};

export default AllStatus;
