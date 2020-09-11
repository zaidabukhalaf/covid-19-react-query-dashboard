import useQuery from "react-query";
import { fetchDataCorona } from "../queries";

const { data, isLoading, isError } = useQuery(
  ["global", "all"],
  fetchDataCorona
);
