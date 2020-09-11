import { useQuery } from "react-query";
import { fetchDataCorona } from "../queries";

const getData = () => {
  return fetchDataCorona("all");
};

export default function AllData() {
  return useQuery("all", getData);
}
