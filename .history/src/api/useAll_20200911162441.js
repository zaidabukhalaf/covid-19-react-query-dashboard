import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";

const getAllData = () => {
  return fetchDataCorona("all");
};

export function useAll() {
  return useQuery("all", getAllData);
}
