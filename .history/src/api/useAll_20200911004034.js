import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";

const getAllData = () => {
  return fetchDataCorona("all", "all");
};

export default function useAll() {
  return useQuery("posts", getAllData);
}
