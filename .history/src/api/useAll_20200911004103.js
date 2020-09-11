import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";

const getAllData = () => {
  return fetchDataCorona("all");
};

export default function useAll() {
  return useQuery("all", getAllData);
}
