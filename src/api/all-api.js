import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";

const getAllData = () => {
  return fetchDataCorona("all");
};

const getAllStatus = () => {
  return fetchDataCorona("countries");
};

export function useGlobalData() {
  return useQuery("all", getAllData);
}

export function useStatesData() {
  return useQuery("status", getAllStatus);
}
